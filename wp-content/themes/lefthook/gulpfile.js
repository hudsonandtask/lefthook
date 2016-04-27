// Load plugins
var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')({ camelize: true }),
    lr = require('tiny-lr'),
	sass = require('gulp-sass'),
    server = lr(),
    pixrem = require('gulp-pixrem'),
    browserSync = require('browser-sync');

// https://www.npmjs.com/package/run-sequence
var runSequence = require('run-sequence');

var sass_style_src = 'styles/style.scss';
var sass_dest = '';

gulp.task('scripts', function () {
    return gulp.src(['app/**/*.js', 'app/*.js', '!app/scripts.js'])
    .pipe(plugins.concat('scripts.js'))
    .pipe(gulp.dest('app/'))

    // .pipe(plugins.livereload(server));
});

// Sass styles task
// watches two .src glob locations and outputs to style.css
gulp.task('sass', function() {
  return gulp.src(sass_style_src)
    .pipe(sass().on('error', sass.logError))
    .pipe(pixrem({ replace: true }))
    .pipe(gulp.dest(sass_dest))
    .pipe(browserSync.stream());
});


gulp.task('default', function (callback) {
  runSequence('sass', 'scripts',  callback);
});

// // Watch task
// gulp.task('watch', function() {
//   gulp.watch(sass_watch_src, ['sass']).on('change', browserSync.reload);
//   gulp.watch(scripts_watch_src, ['scripts']).on('change', browserSync.reload);
// });