var config = require('./config');
var gulp = require('gulp');
var fs = require('fs');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');
var handleErrors = require('../utils/handleErrors.js');

//Globais
global.config = config;
global.gulp = gulp;
global.handleErrors = handleErrors;
global.browserSync = browserSync;




var tasks = fs.readdirSync('./gulp/tarefas/');
tasks.forEach(function(task) {
	require('./tarefas/' + task);
});

/* Tarefa default, compila less, minifica js e inicia os  watches*/
gulp.task('default', function(){
	runSequence(['styles', 'scripts', 'html', 'templates'], 'serve');
});