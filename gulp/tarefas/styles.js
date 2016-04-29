var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var pastas = config.caminhos.styles;
var filter = require('gulp-filter');


/* Compilar LESS para CSS */
gulp.task('styles',function(){
	gulp.src(pastas.input + '/style.less')
	// .pipe(sourcemaps.init())
	.pipe(less(config.less))
	.on('error', handleErrors)
	// .pipe(minifyCSS())
	// .pipe(autoprefixer())
	// .pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(pastas.output))
	.pipe(filter('**/*.css'))
	.pipe(browserSync.reload({
		stream: true
	}));
});
