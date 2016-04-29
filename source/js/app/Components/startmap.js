import map from './sub/map.js'


var controller = function($state){
	
	// console.log($state.get());
}
controller.$inject = ['$state'];


var link = function($element){
	angular.element($element[0]).ready(function() {
		map(document.getElementById('map-container'), document.getElementById('map_pesquisa'));
	});
}
link.$inject = ['$element'];


var diretiva = function(){

	return {
		restrict: 'E',
		templateUrl: "part/startmap.html",
		controller: controller,
		controllerAs: 'startmap',
		link: link
	} 
}
diretiva.$inject = [];
module.exports = {
	name: 'startmap',
	directive: diretiva
}