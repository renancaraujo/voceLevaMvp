var Screens = require('./Screens');
var stateProvider,  urlRouterProvider, locationProvider, compileProvider;
var config = function($stateProvider,  $urlRouterProvider, $locationProvider, $compileProvider){

	

	stateProvider = $stateProvider;
	urlRouterProvider = $urlRouterProvider;
	locationProvider = $locationProvider;
	compileProvider = $compileProvider;

	

	
	$compileProvider.debugInfoEnabled(sharedData.debug);

	//redirecionar caso de nao encontrado
	$urlRouterProvider.otherwise("/");



	//adicionar states
	Screens.config(stateProvider);

	

}
config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$compileProvider'];
module.exports = {
	config: config,
};