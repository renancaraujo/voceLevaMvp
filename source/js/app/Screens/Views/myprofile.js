var controller = function($rootScope){
	var cd = this;
	cd.user = $rootScope.user;
	
}
controller.$inject = ['$rootScope'];


var link = function($stateParams){

}
link.$inject = ['$stateParams'];


var diretiva = function(){

	return {
		restrict: 'E',
		templateUrl: "part/myprofile.html",
		controller: controller,
		controllerAs: 'view',
		link: link
	} 
}
diretiva.$inject = [];
module.exports = diretiva;