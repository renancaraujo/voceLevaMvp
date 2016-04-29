var utils = function($http, $rootScope){
	var factory = {}; 
	
	factory.erro = {};
	factory.erro.MESSAGES = ['Erro indefinido', ];
	factory.erro.show = function(content, time){
		var time_ = (time != undefined && time ? time : 4000);
		Materialize.toast(content, time_);
	};


	
	return factory;
}
utils.$inject = ['$http','$rootScope'];

module.exports = function(module){
	module.factory('Factory', utils);
}
