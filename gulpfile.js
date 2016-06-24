var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    merge = require('gulp-merge'),
    sass = require('gulp-sass'),
    inject = require('gulp-inject'),
    browserSync = require('browser-sync').create(),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware')
    
var webpackConfig = require('./webpack.config')
var webpackBundler = webpack(webpackConfig)

function compileCss() {
    return merge(
        gulp.src('node_modules/reveal.js/css/reveal.css'),
        gulp.src('src/css/*.css'),
            gulp.src('src/css/*.scss')
                .pipe(sass())
    )
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('dist/css'))
}
gulp.task('css', compileCss)

gulp.task('html', function() {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'))
})

gulp.task('jscopy', function() {
    return gulp.src(['src/js/head.min.js', 'node_modules/reveal.js/js/reveal.js', 'node_modules/reveal.js/plugin/highlight/highlight.js'])
        .pipe(gulp.dest('dist/js'))
})

gulp.task('watchHtml', function() {
    gulp.watch('src/**/*.html', ['html'])
})

gulp.task('build', ['css', 'html', 'jscopy']);

gulp.task('serve', ['css'], function () {
    gulp.src('index.html')
        .pipe(gulp.dest('dist'))

    browserSync.init({
        server: 'dist',
        port: 3000,
        middleware: [
            webpackDevMiddleware(webpackBundler, {
                publicPath: webpackConfig.output.publicPath,
                stats: { colors: true }
            }),
            webpackHotMiddleware(webpackBundler)
        ]
    })
    
    gulp.watch(['src/css/*.css', 'src/css/*.scss'], function () {
        return compileCss().pipe(browserSync.stream())
    })
})