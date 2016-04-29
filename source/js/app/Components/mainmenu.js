var controller = function($scope, $rootScope, $stateParams, $element){
	var cd = this;
	cd.user = $rootScope.user;

	angular.element($element[0]).ready(function() {
		$(".mainmenu-caller").sideNav({menuWidth: 270, closeOnClick: true});

	});
	

	if($stateParams.hidetopbar){
		utils.dom.addClass("hide", $element[0]);
	}
	else{
		utils.dom.removeClass("hide", $element[0]);
	}
	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

		if(toParams.hidetopbar){
			utils.dom.addClass("hide", $element[0]);
		}
		else{
			utils.dom.removeClass("hide", $element[0]);
		}
	});

	


}
controller.$inject = ['$scope','$rootScope', '$stateParams', '$element'];


var link = function(){

}
link.$inject = [];


var diretiva = function(){

	return {
		restrict: 'E',
		templateUrl: "part/mainmenu.html",
		controller: controller,
		controllerAs: 'mainmenu',
		link: link
	} 
}
diretiva.$inject = [];
module.exports = {
	name: 'mainmenu',
	directive: diretiva
}