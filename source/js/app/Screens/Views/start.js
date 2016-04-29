
var controller = function($scope, $element){
	
	
}
controller.$inject = ['$scope', '$element'];


var link = function($element){
	
}
link.$inject = ['$element'];


var diretiva = function(){

	return {
		restrict: 'E',
		templateUrl: "part/start.html",
		controller: controller,
		controllerAs: 'view',
		link: link
	} 
}
diretiva.$inject = [];
module.exports = diretiva;