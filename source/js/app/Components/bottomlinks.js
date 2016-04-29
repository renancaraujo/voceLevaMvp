var controller = function($rootScope, $stateParams, $element){
	
	
}
controller.$inject = ['$rootScope', '$stateParams', '$element'];


var link = function(){
	
}
link.$inject = [];


var diretiva = function(){

	return {
		restrict: 'E',
		templateUrl: "part/bottomlinks.html",
		controller: controller,
		controllerAs: 'bottomlinks',
		link: link
	} 
}
diretiva.$inject = [];
module.exports = {
	name: 'bottomlinks',
	directive: diretiva
}