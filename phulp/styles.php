<?php

$phulp->task('styles', function ($phulp) use ($config) {
    $injectFiles = $phulp->src([$config['src'] . '/app'], '/.+(?<!app)\.scss$/');

    $phulp->src([$config['src'] . '/app'], '/app\.scss/', false)
        ->pipe(new Inject($injectFiles))
        ->pipe(new ScssCompiler(['importPaths' => ['src/src/app/']]))
        ->pipe($phulp->dest($config['tmp'] . '/serve/app/'));
});
