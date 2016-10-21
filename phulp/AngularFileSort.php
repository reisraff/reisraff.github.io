<?php

class AngularFileSort implements \Phulp\PipeInterface
{
    public function execute(\Phulp\Source $src)
    {
        $stack = $modules = $modulesName = $orderedModules = [];

        foreach ($src->getDistFiles() as $key => $distFile) {
            $src->removeDistFile($key);

            if (! $this->isModule($distFile->getContent())) {
                $stack[] = $distFile;
                continue;
            }

            $moduleName = $this->getModuleName($distFile);
            $modulesName[] = $moduleName;

            $modules[$moduleName] = [
                'distFile' => $distFile,
                'dependencies' => $this->getDependencies($distFile),
            ];
        }

        foreach ($modules as $key => $module) {
            $module['dependencies'] = array_intersect($modulesName, $module['dependencies']);

            $orderedModules[] = $module;
        }

        foreach ($orderedModules as $key => $module) {
            foreach ($module['dependencies'] as $modulesName) {
                $orderedModules = array_splice(
                    $orderedModules,
                    $key,
                    0,
                    $modules[$modulesName]
                );
            }
        }

        foreach ($orderedModules as $module) {
            array_unshift($stack, $module['distFile']);
        }

        array_walk($stack, [$src, 'addDistFile']);
    }

    public function isModule($code)
    {
        return preg_match(
            '/angular[ \n]*\.[ \n]*module[ \n]*\([ \n]*[\'"]{1}[a-zA-Z0-9\.-]+[\'"]{1}[ \n]*,[ \n]*\[/',
            $code
        );
    }

    public function getModuleName(\Phulp\DistFile $distFile)
    {
        return preg_replace(
            '/angular[ \n]*\.[ \n]*module[ \n]*\([ \n]*[\'"]{1}([a-zA-Z0-9\.-]+)/',
            '$1',
            $distFile->getContent()
        );
    }

    public function getDependencies(\Phulp\DistFile $distFile)
    {
        $dependencies = preg_replace(
            '/angular[ \n]*\.[ \n]*module[ \n]*\([ \n]*[\'"]{1}[a-zA-Z0-9\.-]+[\'"]{1}[ \n]*,[ \n]*\[([ \n]*[\'"]{1}[a-zA-Z0-9\.-]+[\'"]{1}[ \n]*,?)+/',
            '$1',
            $distFile->getContent()
        );

        $dependencies = preg_replace('/(\S|\'|")/', null, $dependencies);

        return array_filter(explode(',', $dependencies));
    }
}
