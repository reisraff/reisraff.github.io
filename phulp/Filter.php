<?php

class Filter implements \Phulp\PipeInterface
{
    private $callback;

    public function __construct(callable $callback)
    {
        $this->callback = $callback;
    }

    public function execute(\Phulp\Source $src)
    {
        foreach ($src->getDistFiles() as $key => $distFile) {
            $callback = $this->callback;
            if (! $callback($distFile)) {
                $src->removeDistFile($key);
            }
        }
    }
}
