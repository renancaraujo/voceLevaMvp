function checkProp(prop, _if, _else){
	if(prop == true){
		_if();
	}
	else{
		_else();
	}
}
var controller = function($rootScope, $stateParams, $element){
	var cd = this;


	//if hide tpbar
	checkProp($stateParams.topbar.hide, function(){
		utils.dom.addClass("hide", $element[0]);
	}, function(){
		utils.dom.removeClass("hide", $element[0]);
	});

	//if semitransparent
	checkProp($stateParams.topbar.semiTransparent, function(){
		utils.dom.addClass("semitransparent", $element[0]);
	}, function(){
		utils.dom.removeClass("semitransparent", $element[0]);
	});

	//if hide title
	checkProp($stateParams.topbar.hideTitle, function(){
		utils.dom.addClass("hidetitle", $element[0]);
	}, function(){
		utils.dom.removeClass("hidetitle", $element[0]);
	});

	//if transparent
	checkProp($stateParams.topbar.transparent, function(){
		utils.dom.addClass("transparent", $element[0]);
	}, function(){
		utils.dom.removeClass("transparent", $element[0]);
	});


	cd.title = $stateParams.title;

	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
		
		//if hide tpbar
		checkProp(toParams.topbar.hide, function(){
			utils.dom.addClass("hide", $element[0]);
		}, function(){
			utils.dom.removeClass("hide", $element[0]);
		});

		//if semitransparent
		checkProp(toParams.topbar.semiTransparent, function(){
			utils.dom.addClass("semitransparent", $element[0]);
		}, function(){
			utils.dom.removeClass("semitransparent", $element[0]);
		});

		//if hide title
		checkProp(toParams.topbar.hideTitle, function(){
			utils.dom.addClass("hidetitle", $element[0]);
		}, function(){
			utils.dom.removeClass("hidetitle", $element[0]);
		});

		//if transparent
		checkProp(toParams.topbar.transparent, function(){
			utils.dom.addClass("transparent", $element[0]);
		}, function(){
			utils.dom.removeClass("transparent", $element[0]);
		});


		cd.title = toParams.title;

	});
	
}
controller.$inject = ['$rootScope', '$stateParams', '$element'];


var link = function(){
	
}
link.$inject = [];


var diretiva = function(){

	return {
		restrict: 'E',
		templateUrl: "part/topbar.html",
		controller: controller,
		controllerAs: 'diretiva',
		link: link
	} 
}
diretiva.$inject = [];
module.exports = {
	name: 'topbar',
	directive: diretiva
}