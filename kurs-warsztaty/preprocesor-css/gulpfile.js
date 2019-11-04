let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', () => {       //funkcja ktora zmieni scss na css bo css mozna do html
    return gulp.src('app/scss/**/*.scss')       // ** obojetnie czy w katalogu czy nie
    .pipe(sass())               //kompiluje scss i przenosi do dest
    .pipe(gulp.dest('app/css'));
});

gulp.task('watch', () => {
    gulp.watch('app/scss/**/*.scss', gulp.series('sass')) // jesli zmiana to wykona taska 'sass'
})