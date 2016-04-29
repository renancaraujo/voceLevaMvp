var assign = require('lodash.assign');

var rootScopeFunctions = {};



	//por hora estáticos
	rootScopeFunctions.user = {};
	rootScopeFunctions.user.name = 'Andersson Quegi';
	rootScopeFunctions.user.profilePicture = 'images/profile.jpg';
	rootScopeFunctions.user.phone = '+55 (19) 912345-6789';
	rootScopeFunctions.user.email = 'sauro@sauro.me';
	rootScopeFunctions.user.city = 'Campinas/sp';
	rootScopeFunctions.user.cpf = '123.***.***-03';
	rootScopeFunctions.user.rg = '22.***.***-8';







function run($rootScope, $state, $stateParams){		

	$rootScope = assign($rootScope,rootScopeFunctions);

}
run.$inject = ['$rootScope', '$state', '$stateParams'];
module.exports = {
	run: run,
};