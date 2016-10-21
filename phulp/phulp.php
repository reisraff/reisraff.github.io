<?php

$config = require 'config.php';

require 'AngularFileSort.php';
require 'AngularTemplateCache.php';
require 'Inject.php';
require 'ScssCompiler.php';
require 'Filter.php';
require 'InjectBowerVendor.php';
require 'scripts.php';
require 'styles.php';
require 'others.php';

$phulp->task('inject', function ($phulp) use ($config) {
    $phulp->start(['scripts', 'styles']);

    $injectStyles = $phulp->src(
        [$config['tmp'] . '/serve/app'],
        '/.+(?<!' . str_replace('/', '\/', $config['tmp']) . '\/serve\/app\/vendor)\.css$/' // check it after
    );

    $injectScripts = $phulp->src(
        [$config['src'] . '/app'],
        '/.+(?<!spec|mock)\.js$/'
    )
        ->pipe(new AngularFileSort)
        ->pipe($phulp->dest($config['tmp'] . '/serve/app'))
        ;

    $phulp->src([$config['src'] . '/app'], '/\.html$/')
        ->pipe($phulp->dest($config['tmp'] . '/serve/app'));

//   var injectOptions = {
//     ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
//     addRootSlash: false
//   };

    $filterFilename = function ($filename) {
        return 'app/' . ltrim($filename, '/');
    };

    $phulp->src([$config['src']], '/html$/', false)
        ->pipe(new Inject($injectStyles->getDistFiles(), ['filterFilename' => $filterFilename]))
        ->pipe(new Inject($injectScripts->getDistFiles(), ['filterFilename' => $filterFilename]))
        ->pipe(new InjectBowerVendor([
            'bowerPath' => $config['bower_components'],
            'distVendorPath' => $config['tmp'] . '/serve/vendor',
            'filter' => function ($distFile) {
                $filename = $distFile->getRelativepath() . '/' . $distFile->getName();
                if (preg_match('/^(?!angular-bootstrap|bootstrap-sass|jquery|angular-mocks|animate).*/', $filename)) {
                    return true;
                }
            },
            'injectOptions' => [
                'filterFilename' => function ($filename) {
                    return preg_replace('/src\/bower_components\//', 'app/vendor/', $filename);
                },
                'starttag' => '<!-- bower:js -->',
                'endtag' => '<!-- endbower -->',
            ]
        ]))
        ->pipe($phulp->dest($config['tmp'] . '/serve'));
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
        ->pipe($phulp->dest($config['tmp'] . '/partials/'));
});

$phulp->task('html', function ($phulp) {
    $phulp->start(['inject', 'partials']);
//    var partialsInjectFile = $phulp->src(path.join(conf.paths.tmp, '/partials/templateCacheHtml.js'), { read: false });
//    var partialsInjectOptions = {
//        starttag: '<!-- inject:partials -->',
//        ignorePath: path.join(conf.paths.tmp, '/partials'),
//        addRootSlash: false
//    };
//
//    var htmlFilter = $.filter('*.html', { restore: true });
//    var jsFilter = $.filter('**/*.js', { restore: true });
//    var cssFilter = $.filter('**/*.css', { restore: true });
//    var assets;
//
//    $phulp->src(path.join(conf.paths.tmp, '/serve/*.html'))
//        ->pipe($.inject(partialsInjectFile, partialsInjectOptions))
//        ->pipe(assets = $.useref.assets())
//        ->pipe($.rev())
//        ->pipe(jsFilter)
//        ->pipe($.sourcemaps.init())
//        ->pipe($.ngAnnotate())
//        ->pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', conf.errorHandler('Uglify'))
//        ->pipe($.sourcemaps.write('maps'))
//        ->pipe(jsFilter.restore)
//        ->pipe(cssFilter)
//        ->pipe($.sourcemaps.init())
//        ->pipe($.replace('../../bower_components/bootstrap-sass/assets/fonts/bootstrap/', '../fonts/'))
//        ->pipe($.minifyCss({ processImport: false }))
//        ->pipe($.sourcemaps.write('maps'))
//        ->pipe(cssFilter.restore)
//        ->pipe(assets.restore())
//        ->pipe($.useref())
//        ->pipe($.revReplace())
//        ->pipe(htmlFilter)
//        ->pipe($.minifyHtml({
//            empty: true,
//            spare: true,
//            quotes: true,
//            conditionals: true
//        }))
//        ->pipe(htmlFilter.restore)
//        ->pipe($phulp->dest(path.join(conf.paths.dist, '/')))
//        ->pipe($.size({ title: path.join(conf.paths.dist, '/'), showFiles: true }));
});

$phulp->task('clean', function ($phulp) use ($config) {
    $phulp->src([$config['dist'], $config['tmp']])
        ->pipe($phulp->clean());
});

$phulp->task('build', function ($phulp) {
    $phulp->start(['clean', 'html', 'fonts', 'others']);
});

$phulp->task('default', function ($phulp) {
    $phulp->start(['build']);
});

$phulp->task('watch', function ($phulp) use ($config) {
    $phulp->start(['clean', 'inject']);

    if (! $path = realpath($config['tmp'] . '/serve')) {
        \Phulp\Output::err(\Phulp\Output::colorize('The build wasn\'t sucessfully', 'red'));
        exit(1);
    }

    $server1 = new \Phulp\Server\Server(
        [
            'path' => $path,
            'port' => '8000'
        ],
        $phulp->getLoop()
    );

    $server2 = new \Phulp\Server\Server(
        [
            'path' => $path,
            'port' => '8001'
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
});
