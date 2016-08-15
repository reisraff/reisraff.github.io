<?php

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

$phulp->task('partials', function () {
  return $phulp->src([
    path.join(conf.paths.src, '/app/**/*.html'),
    path.join(conf.paths.tmp, '/serve/app/**/*.html')
  ])
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.angularTemplatecache('templateCacheHtml.js', {
      module: 'app',
      root: 'app'
    }))
    .pipe($phulp->dest(conf.paths.tmp + '/partials/'));
});

$phulp->task('html', function ($phulp) {
    // $phulp->start(['inject', 'partials']);

  var partialsInjectFile = $phulp->src(path.join(conf.paths.tmp, '/partials/templateCacheHtml.js'), { read: false });
  var partialsInjectOptions = {
    starttag: '<!-- inject:partials -->',
    ignorePath: path.join(conf.paths.tmp, '/partials'),
    addRootSlash: false
  };

  var htmlFilter = $.filter('*.html', { restore: true });
  var jsFilter = $.filter('**/*.js', { restore: true });
  var cssFilter = $.filter('**/*.css', { restore: true });
  var assets;

  $phulp->src(path.join(conf.paths.tmp, '/serve/*.html'))
    ->pipe($.inject(partialsInjectFile, partialsInjectOptions))
    ->pipe(assets = $.useref.assets())
    ->pipe($.rev())
    ->pipe(jsFilter)
    ->pipe($.sourcemaps.init())
    ->pipe($.ngAnnotate())
    ->pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', conf.errorHandler('Uglify'))
    ->pipe($.sourcemaps.write('maps'))
    ->pipe(jsFilter.restore)
    ->pipe(cssFilter)
    ->pipe($.sourcemaps.init())
    ->pipe($.replace('../../bower_components/bootstrap-sass/assets/fonts/bootstrap/', '../fonts/'))
    ->pipe($.minifyCss({ processImport: false }))
    ->pipe($.sourcemaps.write('maps'))
    ->pipe(cssFilter.restore)
    ->pipe(assets.restore())
    ->pipe($.useref())
    ->pipe($.revReplace())
    ->pipe(htmlFilter)
    ->pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true,
      conditionals: true
    }))
    ->pipe(htmlFilter.restore)
    ->pipe($phulp->dest(path.join(conf.paths.dist, '/')))
    ->pipe($.size({ title: path.join(conf.paths.dist, '/'), showFiles: true }));
});

$phulp->task('fonts', function () {
  return $phulp->src($.mainBowerFiles())
    .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
    .pipe($.flatten())
    .pipe($phulp->dest(path.join(conf.paths.dist, '/fonts/')));
});

$phulp->task('other', function () {
  var fileFilter = $.filter(function (file) {
    return file.stat.isFile();
  });

  return $phulp->src([
    path.join(conf.paths.src, '/**/*'),
    path.join('!' + conf.paths.src, '/**/*.{html,css,js,scss}')
  ])
    .pipe(fileFilter)
    .pipe($phulp->dest(path.join(conf.paths.dist, '/')));
});

$phulp->task('clean', function () {
    $phulp->src(['dist/'])
        ->pipe($phulp->clean());
});

$phulp->task('build', function ($phulp) {
    $phulp->start(['clean', 'html', 'fonts', 'other']);
});
