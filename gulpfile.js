const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('scss', function () {
    gulp.src('./src/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('default', function () {
    gulp.watch('./src/styles/**/*.scss', ['scss']);
});
