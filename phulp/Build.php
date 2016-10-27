<?php

use Phulp\Minifier\JsMinifier;

class Build implements \Phulp\PipeInterface
{
    private $options = [
        'dist_path' => './',
    ];

    public function __construct(array $options = [])
    {
        $this->options = array_merge($this->options, $options);
    }

    public function execute(\Phulp\Source $src)
    {
        foreach ($src->getDistFiles() as $distFile) {
            $this->process($distFile);
        }
    }

    private function process(\Phulp\DistFile $distFile)
    {
        $root = $distFile->getBasepath();

        $matches = [];

        preg_match_all(
            '/<!--\s*build:[a-zA-Z0-9]+\s*[a-zA-Z0-9\/-_\.]+\s-->(.*?)<!--\s*endbuild\s*-->/s',
            $distFile->getContent(),
            $matches
        );

        foreach ($matches[0] as $match) {
            $ext = preg_replace('/.*build:([a-zA-Z0-9]+).*/s', '$1', $match);
            $dest = preg_replace('/.*build:[a-zA-Z0-9]+\s*([a-zA-Z0-9\/-_\.]+).*/s', '$1', $match);

            if ($ext == 'js') {
                $scripts = [];

                preg_match_all('/src=[\"\'](.*?)[\"\']/s', $match, $scripts);
                $scripts = $scripts[1];

                $finalContent = null;

                foreach ($scripts as $script) {
                    $finalContent .= file_get_contents($root . '/' . $script);
                }

                echo PHP_EOL . PHP_EOL . PHP_EOL . $finalContent . PHP_EOL;

                $distFile = new \Phulp\DistFile(
                    $finalContent
                );
                $distFile->setDistpathname($dest);

                $src = new \Phulp\Source([$this->options['dist_path']]);
                $src->pipe(new Filter(function () {
                    return true;
                }));
                $src->addDistFile($distFile);
                $src->pipe(new JsMinifier);

                foreach ($src->getDistFiles() as $distFile) {
                    $dir = $this->options['dist_path'];

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
                        $this->options['dist_path'] . DIRECTORY_SEPARATOR . $filename,
                        $distFile->getContent()
                    );
                }

            }

            if ($ext == 'css') {

            }
        }
    }
}
