var gulp = require('gulp');
var imagemin = require ('gulp-imagemin');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

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

const watchSass = require("gulp-watch-sass")

gulp.task("sass:watch", () => watchSass([
    "./public/**/*.{scss,css}",
    "!./public/libs/**/*"
  ])
    .pipe(sass())
    .pipe(gulp.dest("./public")));


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
        gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"));
    })
    gulp.task('default',gulp.parallel(['imagemin','copyhtml','minify']))
    //watching a file

    gulp.task('watch', function () {
        // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
        return watch('css/**/*.css', function () {
            gulp.src('css/**/*.css')
                .pipe(gulp.dest('build'));
        });
    });