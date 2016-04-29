var controller = function($scope){

}
controller.$inject = ['$scope'];


var link = function($stateParams){

}
link.$inject = ['$stateParams'];


var diretiva = function(){

	return {
		restrict: 'E',
		templateUrl: "part/signup.html",
		controller: controller,
		controllerAs: 'view',
		link: link
	} 
}
diretiva.$inject = [];
module.exports = diretiva;