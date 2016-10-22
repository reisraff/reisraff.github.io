<?php

class AngularFileSort implements \Phulp\PipeInterface
{
    public function execute(\Phulp\Source $src)
    {
        $stack = $modules = $modulesName = $orderedModules = [];

        foreach ($src->getDistFiles() as $key => $distFile) {
            $src->removeDistFile($key);

            $content = $distFile->getContent();
            if (! $this->isModule($content)) {
                $stack[] = $distFile;
                continue;
            }

            $isNg = $this->isNg($content);

            $moduleName = $isNg ?
                'angular' :
                $this->getModuleName($content);

            $modulesName[] = $moduleName;

            $modules[$moduleName] = [
                'distFile' => $distFile,
                'dependencies' => $isNg ? [] : array_merge($this->getDependencies($content), ['angular']),
            ];
        }

        foreach ($modules as & $module) {
            $module['dependencies'] = array_intersect($modulesName, $module['dependencies']);
        }

        $order = function ($moduleName, $module) use (& $order, & $orderedModules, $modules) {
            if (isset($orderedModules[$moduleName])) {
                return;
            }

            foreach ($module['dependencies'] as $dependency) {
                if ($dependency == $moduleName) {
                    continue;
                }
                if (! isset($orderedModules[$dependency])) {
                    $order($dependency, $modules[$dependency]);
                }
            }

            $orderedModules[$moduleName] = $module;
        };

        // I don't know why, not being by referency it does not work weel
        foreach ($modules as $moduleName => & $module) {
            $order($moduleName, $module);
        }

        $orderedModules = array_reverse($orderedModules);

        foreach ($orderedModules as $module) {
            array_unshift($stack, $module['distFile']);
        }

        array_walk($stack, [$src, 'addDistFile']);
    }

    public function isModule($code)
    {
        $ng = $this->isNg($code);

        $module = preg_match(
            '/angular[ \n]*\.[ \n]*module[ \n]*\([ \n]*[\'"]{1}[a-zA-Z0-9\.-]+[\'"]{1}[ \n]*,[ \n]*\[/',
            $code
        );

        return $ng || $module;
    }

    public function isNg($code)
    {
        return preg_match(
            '/angularModule[ \n]*\([ \n]*[\'"]{1}ng[\'"]{1}/',
            $code
        );
    }

    public function getModuleName($code)
    {
        return preg_replace(
            '/.*angular[ \n]*\.[ \n]*module[ \n]*\([ \n]*[\'"]{1}([a-zA-Z0-9\.-]+).*/s',
            '$1',
            $code
        );
    }

    public function getDependencies($content)
    {
        $dependencies = preg_replace(
            '/.*angular[ \n]*\.[ \n]*module[ \n]*\([ \n]*[\'"]{1}[a-zA-Z0-9\.-]+[\'"]{1}[ \n]*,[ \n]*\[([a-zA-Z0-9\.\-\'\",\s]*)\].*/s',
            '$1',
            $content
        );

        $dependencies = preg_replace('/(\s|\'|")/', null, $dependencies);

        return array_filter(explode(',', $dependencies));
    }
}
