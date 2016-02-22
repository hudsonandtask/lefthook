// Load plugins
var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')({ camelize: true }),
	lr = require('tiny-lr'),
    server = lr();

gulp.task('default', function () {
    return gulp.src(['app/**/*.js', 'app/*.js', '!app/scripts.js'])
        .pipe(plugins.concat('scripts.js'))
        .pipe(gulp.dest('app/'))
        .pipe(plugins.livereload(server));
});