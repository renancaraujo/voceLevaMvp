/*configurar servidor: browsersync*/
gulp.task('serve', function() {
    browserSync.init({
        server: config.server,
        port: config.porta,
        logConnections: true,
    	logLevel: 'info',
    	notify: false
    });
    gulp.start('watch');
});

