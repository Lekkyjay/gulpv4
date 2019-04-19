const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//Compile scss into css
function style() {
    //1, where are my scss files
    return gulp.src('./scss/**/*.scss')
    //2, pass those files throught sass compiler
        .pipe(sass())
    //3, where do I save the compiled css
        .pipe(gulp.dest('./css'))
}

exports.style = style;