/* Verificar Modificações e Executar as tarefas*/
var caminhos = config.caminhos;
gulp.task('watch',function(){
	gulp.watch(caminhos.styles.input + '/**/*.less',['styles']);	
	gulp.watch(caminhos.html.input + '/**/*.html',['html']);
	gulp.watch(caminhos.templates.input + '/**/*.html',['templates']);
	gulp.watch(caminhos.images.input + '/**/*.jpg',['images']);
	gulp.watch(caminhos.images.input + '/**/*.png',['images']);
});