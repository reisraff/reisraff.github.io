<?php

$config = require 'config.php';

require 'AngularFileSort.php';
require 'AngularTemplateCache.php';
require 'InjectBowerVendor.php';
require 'Build.php';
require 'scripts.php';
require 'styles.php';
require 'others.php';
require 'htmls.php';

use Phulp\Inject\Inject;

$phulp->task('inject', function ($phulp) use ($config) {
    $phulp->start(['others', 'scripts', 'styles', 'htmls']);

    $injectStyles = $phulp->src(
        [$config['tmp'] . '/app'],
        '/.+(?<!' . str_replace('/', '\/', $config['tmp']) . '\/serve\/app\/vendor)\.css$/' // check it after
    );

    $injectScripts = $phulp->src(
        [$config['src'] . '/app'],
        '/.+(?<!spec|mock)\.js$/'
    )
        ->pipe(new AngularFileSort)
        ->pipe($phulp->dest($config['tmp'] . '/app'))
        ;

    $filterFilename = function ($filename) {
        return 'app/' . ltrim($filename, '/');
    };

    $phulp->src([$config['src']], '/html$/', false)
        ->pipe(new Inject($injectStyles->getDistFiles(), ['filterFilename' => $filterFilename]))
        ->pipe(new Inject($injectScripts->getDistFiles(), ['filterFilename' => $filterFilename]))
        ->pipe(new InjectBowerVendor([
            'bowerPath' => $config['bower_components'],
            'distVendorPath' => $config['tmp'] . '/vendor/',
            'injectOptions' => [
                'filterFilename' => function ($filename) {
                    return 'vendor/' . $filename;
                },
                'tagname' => 'bower'
            ]
        ]))
        ->pipe($phulp->dest($config['tmp'] . '/'));
});

$phulp->task('partials', function ($phulp) use ($config) {
    $phulp->src(
        [
            $config['src'] . '/app',
        ],
        '/\.html$/'
    )
        ->pipe($phulp->iterate(function ($distFile) {
            $distFile->setContent(
                preg_replace(
                    ['/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s'],
                    ['>', '<', '\\1'],
                    $distFile->getContent()
                )
            );
        }))
        ->pipe(new AngularTemplateCache('templateCacheHtml.js', ['module' => 'app', 'root' => 'app']))
        ->pipe($phulp->dest($config['tmp']));
});

$phulp->task('dist', function ($phulp) use ($config) {
    $phulp->start(['inject', 'partials']);

    $partialsInjectFile = $phulp->src(
        [$config['tmp']],
        '/templateCacheHtml\.js$/',
        false
    );

    $phulp->src(
        [$config['tmp']],
        '/html$/',
        false
    )
        // ->pipe($phulp->iterate(function ($distFile) {
        //     $distFile->setContent(
        //         preg_replace(
        //             '/\<\!\-\-(.+?)\-\-\>/',
        //             null,
        //             $distFile->getContent()
        //         )
        //     );
        //     $distFile->setContent(
        //         preg_replace(
        //             ['/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s'],
        //             ['>', '<', '\\1'],
        //             $distFile->getContent()
        //         )
        //     );
        // }))
        ->pipe(
            new Inject(
                $partialsInjectFile->getDistFiles(),
                [
                    'starttag' => '<!-- inject:partials -->',
                ]
            )
        )
        // ->pipe(new Build(['dist_path' => $config['dist'] . '/dist']))
        // ->pipe(assets = $.useref.assets())
        // ->pipe($.rev())
        // ->pipe(jsFilter)
        // ->pipe($.ngAnnotate())
        // ->pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', conf.errorHandler('Uglify'))
        // ->pipe(jsFilter.restore)
        // ->pipe(cssFilter)
        // ->pipe($.replace('../../bower_components/bootstrap-sass/assets/fonts/bootstrap/', '../fonts/'))
        // ->pipe($.minifyCss({ processImport: false }))
        // ->pipe(cssFilter.restore)
        // ->pipe(assets.restore())
        // ->pipe($.useref())
        // ->pipe($.revReplace())
        // ->pipe(htmlFilter)
        // ->pipe($.minifyHtml({
            // empty: true,
            // spare: true,
            // quotes: true,
            // conditionals: true
        // }))
        // ->pipe(htmlFilter.restore)
        ->pipe($phulp->dest($config['dist']))
        // ->pipe($.size({ title: path.join(conf.paths.dist, '/'), showFiles: true }));
        ;
});

$phulp->task('clean', function ($phulp) use ($config) {
    $phulp->src([$config['dist'], $config['tmp']])
        ->pipe($phulp->clean());
});

$phulp->task('build', function ($phulp) {
    $phulp->start(['clean', 'dist']);
});

$phulp->task('default', function ($phulp) {
    $phulp->start(['build']);
});

$phulp->task('watch', function ($phulp) use ($config) {
    $phulp->start(['clean', 'inject']);

    if (! $path = realpath($config['tmp'])) {
        \Phulp\Output::err(\Phulp\Output::colorize('The build wasn\'t sucessfully', 'red'));
        exit(1);
    }

    $server = new \Phulp\Server\Server(
        [
            'path' => $path,
            'port' => '8000'
        ],
        $phulp->getLoop()
    );

    $phulp->watch(
        $phulp->src([$config['src']], '/(css|scss)$/'),
        function ($phulp) {
            $phulp->start(['styles']);
        }
    );

    $phulp->watch(
        $phulp->src([$config['src']], '/(js)$/'),
        function ($phulp) {
            $phulp->start(['scripts']);
        }
    );

    $phulp->watch(
        $phulp->src([$config['src'] . '/app'], '/\.html$/'),
        function ($phulp) {
            $phulp->start(['htmls']);
        }
    );

    $phulp->watch(
        $phulp->src(
            [$config['src']],
            '/.+(?<!html|css|js|scss)$/'
        ),
        function ($phulp) {
            $phulp->start(['others']);
        }
    );
});
