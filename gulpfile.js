var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');


gulp.task("babel", function () {
    return gulp.src('src/**/*.js')
        .pipe(watch('src/**/*.js'))
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});