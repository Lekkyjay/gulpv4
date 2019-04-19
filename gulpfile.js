const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//Compile scss into css
function style() {
    //1, where are my scss files
    return gulp.src('./scss/**/*.scss')
    //2, pass those files throught sass compiler
        .pipe(sass().on('error', sass.logError))
    //3, where do I save the compiled css
        .pipe(gulp.dest('./css'))
    //4, stream changes to all browser
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;