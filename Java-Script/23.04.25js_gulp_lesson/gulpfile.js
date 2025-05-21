const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');

function style() {
    return gulp.src('./src/style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/styles/style.css'))
        .pipe(sourcemaps.write())
}

function watch() {
    gulp.watch('./src/style/main.scss', style)
}

exports.default = style