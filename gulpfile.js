var gulp = require('gulp');
var imagemin = require ('gulp-imagemin');
var uglify = require('gulp-uglify');
const { parallel } = require ('gulp')

gulp.task('task-name', function() {
    // Required executing Stuff here
  });

gulp.task('hey', function() {
    console.log('Hello People');
  });

var sass = require('gulp-sass');

gulp.task('sass',function(){
    return gulp.src('app/scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))  
})

// const watchSass = require("gulp-watch-sass")

// gulp.task("sass:watch", () => watchSass([
//     "./public/**/*.{scss,css}",
//     "!./public/libs/**/*"
//   ])
//     .pipe(sass())
//     .pipe(gulp.dest("./public")));


    //copy all html files
    gulp.task('copyhtml',function(){
        gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
    })

    //optimising the images
    gulp.task('imagemin',function(){
            gulp.src('app/images/*')
                .pipe(imagemin())
                .pipe(gulp.dest('dist/images'))
    })
    //Minifying the js
    gulp.task('minify', ()=>{
        var stream = gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"));
        return stream;
    })
  
    exports.build = parallel(minify,copyhtml);