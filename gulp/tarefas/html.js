var fileinclude = require('gulp-file-include');
var html = config.caminhos.html;
var templates = config.caminhos.templates;




/* concatenar e copiar arquivos de template*/
gulp.task('templates', function() {
	gulp.src(templates.input + '/*.html')
	.pipe(fileinclude(config.fileinclude))
	.on('error', handleErrors)
	.pipe(gulp.dest(templates.output))
	.on('end', function() {
		browserSync.reload()
	});
});



/* concatenar e copiar arquivos html*/
gulp.task('html', function() {
	gulp.src(html.input + '/*.html')
	.pipe(fileinclude(config.fileinclude))
	.on('error', handleErrors)
	.pipe(gulp.dest(html.output))
	.on('end', function() {
		browserSync.reload()
	});
});