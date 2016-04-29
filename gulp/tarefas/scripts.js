var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var assign = require('lodash.assign');
var uglify = require('gulp-uglify');



/*Configurando browserify*/

var opts = assign({}, watchify.args, config.browserify);
var b = watchify(browserify(opts)); 
var construir = function(){
	return b.bundle()
	.on('error', gutil.log.bind(gutil, 'Browserify Error'))
	.pipe(source('app.js'))
	.pipe(buffer())
	.pipe(sourcemaps.init({loadMaps: true}))
	.pipe(uglify())
	.on('error', gutil.log)
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest(config.caminhos.script.output))
	.on('end', function() {
		browserSync.reload()
	});
}
b.on('update', construir);
b.on('log', gutil.log);
/* Minificar arquivos Javascript */
gulp.task('scripts',construir);

