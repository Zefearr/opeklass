const gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    nested = require('postcss-nested'),
    vars = require('postcss-simple-vars'),
    autoprefixer = require('autoprefixer'),
    postcssImport = require('postcss-import');
   
 
gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([postcssImport, nested, vars, autoprefixer]))
        .on('error', function(err) {
            console.log(err.toString());
            this.emit('end')
        })
        .pipe(gulp.dest('./app/temp/styles'))
})    