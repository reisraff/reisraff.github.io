<?php

class AngularTemplateCache implements \Phulp\PipeInterface
{
    private $options = [];

    public function __construct($filename, array $options)
    {
        $this->options['module'] = null;

        $this->filename = $filename;
        $this->options = array_merge($this->options, $options);
    }

    public function execute(\Phulp\Source $src)
    {
    }
}
