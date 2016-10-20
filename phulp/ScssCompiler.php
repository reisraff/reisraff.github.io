<?php

use Leafo\ScssPhp\Compiler;

class ScssCompiler implements \Phulp\PipeInterface
{
    /**
     * @var string $uri
     */
    private $uri;

    private $options = [
        'importPaths' => null,
        'uri' => null,
    ];

    /**
     * @param array $options
     */
    public function __construct(array $options = null)
    {
        $this->options = array_merge($this->options, (array) $options);
    }

    /**
     * @inheritdoc
     */
    public function execute(\Phulp\Source $src)
    {
        foreach ($src->getDistFiles() as $key => $file) {
            if (preg_match('/\.scss$/', $file->getName()) || preg_match('/\.scss$/', $file->getDistpathname())) {
                $scss = new Compiler();

                if ($this->options['importPaths']) {
                    $scss->setImportPaths($this->options['importPaths']);
                }

                $css = $scss->compile($file->getContent(), $this->options['uri']);
                $file->setContent($css);
                $file->setDistpathname(preg_replace('/scss$/', 'css', $file->getDistpathname()));
            }
        }
    }
}
