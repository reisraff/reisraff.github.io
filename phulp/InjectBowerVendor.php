<?php

class InjectBowerVendor implements \Phulp\PipeInterface
{
    private $options = [
        'bowerPath' => 'bower_components/',
        'distVendorPath' => 'dist/',
        'filter' => null,
        'injectOptions' => []
    ];

    public function __construct(array $options = null)
    {
        $this->options = array_merge($options, (array) $options);
    }

    public function execute(\Phulp\Source $src)
    {
        if (! file_exists($this->options['bowerPath'])) {
            // error
        }

        $stack = [];
        foreach ((new DirectoryIterator($this->options['bowerPath'])) as $item) {
            if ($item->isDir() && ! $item->isDot()) {
                $file = $item->getPathname() . '/bower.json';
                if (! file_exists($file)) {
                    // error
                }

                $bowerJson = json_decode(file_get_contents($file), true);

                if (! isset($bowerJson['main'])) {
                    // error
                }

                $bowerJson['main'] = is_string($bowerJson['main']) ?
                    (array) $bowerJson['main'] :
                    $bowerJson['main'];

                foreach ($bowerJson['main'] as $file) {
                    $filename = $item->getPathname() . '/' . ltrim($file, '/');
                    if (! file_exists($filename)) {
                        // error
                    }

                    $realpath = realpath($filename);
                    $fullpath = substr($realpath, 0, strrpos($realpath, '/'));
                    $relativepath = str_replace(
                        $this->options['bowerPath'],
                        null,
                        $filename
                    );
                    $relativepath = ltrim(substr($relativepath, 0, strrpos($relativepath, '/')), '/');
                    $filename = substr($realpath, strrpos($realpath, '/') + 1);

                    $distFile = new \Phulp\DistFile(
                        file_get_contents($realpath),
                        $filename,
                        $fullpath,
                        $relativepath
                    );

                    $filter = $this->options['filter'];
                    if ($filter !== null) {
                        if (! is_callable($filter)) {
                            // error
                        }

                        if (! $filter($distFile)) {
                            continue;
                        }
                    }

                    $stack[] = $distFile;
                }
            }
        }

        $bowerDistFiles = new \Phulp\Collection($stack, \Phulp\DistFile::class);

        $srcBower = new \Phulp\Source([$this->options['bowerPath']]);
        $srcBower->pipe(new Filter(function () {
                return true;
            }));
        $srcBower->setDistFiles($bowerDistFiles);
        $srcBower->pipe(new AngularFileSort);

        foreach ($srcBower->getDistFiles() as $distFile) {
            $dir = $this->options['distVendorPath'];

            /** @var DistFile $distFile */
            $filename = $distFile->getDistpathname();
            $dsPos = strrpos($filename, DIRECTORY_SEPARATOR);

            if ($dsPos) {
                $dir .= DIRECTORY_SEPARATOR . substr($filename, 0, $dsPos);
            }

            if (!file_exists($dir)) {
                mkdir($dir, 0777, true);
            }

            file_put_contents(
                $this->options['distVendorPath'] . DIRECTORY_SEPARATOR . $filename,
                $distFile->getContent()
            );
        }

        (new Inject($bowerDistFiles, $this->options['injectOptions']))->execute($src);
    }
}
