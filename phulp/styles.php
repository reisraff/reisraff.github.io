<?php

$phulp->task('styles', function ($phulp) use ($config) {
    // var sassOptions = {
    // style: 'expanded'
    // };

    $injectFiles = $phulp->src([$config['src'] . '/app'], '/.+(?<!app)\.scss$/');

    $phulp->src([$config['src'] . '/app'], '/app\.scss/', false)
        ->pipe(new Inject($injectFiles))
        // ->pipe(wiredep(_.extend({}, conf.wiredep))) // inject bower dependencies
        ->pipe(new ScssCompiler(['importPaths' => ['src/src/app/']]))
        ->pipe($phulp->dest($config['tmp'] . '/serve/app/'));
});
