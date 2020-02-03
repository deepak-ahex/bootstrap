
var gulp = require('gulp');
var sass = require('gulp-sass');


//Converting sass to css

gulp.task('sass',function(){
    return gulp.src('styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('css'))  
})
