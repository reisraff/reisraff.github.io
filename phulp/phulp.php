<?php

require 'AngularTemplateCache.php';

$config = require 'config.php';

$phulp->task('inject', function ($phulp) {
//     // ['scripts', 'styles']
//   $injectStyles = $phulp->src(
//     [
//         path.join(conf.paths.tmp, '/serve/app/**/*.css'),
//         path.join('!' + conf.paths.tmp, '/serve/app/vendor.css')
//     ]);

//   var injectScripts = $phulp->src([
//     path.join(conf.paths.src, '/app/**/*.module.js'),
//     path.join(conf.paths.src, '/app/**/*.js'),
//     path.join('!' + conf.paths.src, '/app/**/*.spec.js'),
//     path.join('!' + conf.paths.src, '/app/**/*.mock.js'),
//   ])
//   ->pipe($.angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));

//   var injectOptions = {
//     ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
//     addRootSlash: false
//   };

//   return $phulp->src(path.join(conf.paths.src, '/*.html'))
//     ->pipe($.inject(injectStyles, injectOptions))
//     ->pipe($.inject(injectScripts, injectOptions))
//     ->pipe(wiredep(_.extend({}, conf.wiredep)))
//     ->pipe($phulp->dest(path.join(conf.paths.tmp, '/serve')));
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

//     var partialsInjectFile = $phulp->src(path.join(conf.paths.tmp, '/partials/templateCacheHtml.js'), { read: false });
//     var partialsInjectOptions = {
//         starttag: '<!-- inject:partials -->',
//         ignorePath: path.join(conf.paths.tmp, '/partials'),
//         addRootSlash: false
//     };

//     var htmlFilter = $.filter('*.html', { restore: true });
//     var jsFilter = $.filter('**/*.js', { restore: true });
//     var cssFilter = $.filter('**/*.css', { restore: true });
//     var assets;

//     $phulp->src(path.join(conf.paths.tmp, '/serve/*.html'))
//         ->pipe($.inject(partialsInjectFile, partialsInjectOptions))
//         ->pipe(assets = $.useref.assets())
//         ->pipe($.rev())
//         ->pipe(jsFilter)
//         ->pipe($.sourcemaps.init())
//         ->pipe($.ngAnnotate())
//         ->pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', conf.errorHandler('Uglify'))
//         ->pipe($.sourcemaps.write('maps'))
//         ->pipe(jsFilter.restore)
//         ->pipe(cssFilter)
//         ->pipe($.sourcemaps.init())
//         ->pipe($.replace('../../bower_components/bootstrap-sass/assets/fonts/bootstrap/', '../fonts/'))
//         ->pipe($.minifyCss({ processImport: false }))
//         ->pipe($.sourcemaps.write('maps'))
//         ->pipe(cssFilter.restore)
//         ->pipe(assets.restore())
//         ->pipe($.useref())
//         ->pipe($.revReplace())
//         ->pipe(htmlFilter)
//         ->pipe($.minifyHtml({
//             empty: true,
//             spare: true,
//             quotes: true,
//             conditionals: true
//         }))
//         ->pipe(htmlFilter.restore)
//         ->pipe($phulp->dest(path.join(conf.paths.dist, '/')))
//         ->pipe($.size({ title: path.join(conf.paths.dist, '/'), showFiles: true }));
});

$phulp->task('fonts', function ($phulp) use ($config) {
  return $phulp->src(
        [$config['bower_components']],
        '/\.(eot|svg|ttf|woff|woff2)$/'
    )
        ->pipe($phulp->iterate(function ($distFile) {
            $distFile->setDistpathname($distFile->getName());
        }))
        ->pipe($phulp->dest($config['dist'] . '/fonts'));
});

$phulp->task('other', function ($phulp) use ($config) {
    $phulp->src(
        [$config['src']],
        '/\.[^(html|css|js|scss)]$/'
    )
        ->pipe($phulp->dest($config['dist']));
});

$phulp->task('clean', function ($phulp) use ($config) {
    $phulp->src([$config['dist'], $config['tmp']])
        ->pipe($phulp->clean());
});

$phulp->task('build', function ($phulp) {
    $phulp->start(['clean', 'html', 'fonts', 'other']);
});

$phulp->task('default', function ($phulp) {
    $phulp->start(['clean', 'build']);
});
