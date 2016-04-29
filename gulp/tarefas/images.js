var imagemin = require('gulp-imagemin');
var pastas = config.caminhos.images;

gulp.task('images', function() {
	return gulp.src(pastas.input + '/**/*')
    // Pass in options to the task 
    .pipe(imagemin(config.imagemin))
    .on('error', handleErrors)
    .pipe(gulp.dest(pastas.output))
    .on('end', function() {
    	browserSync.reload()
    });
    ;
});
