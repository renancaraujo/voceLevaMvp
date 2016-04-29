var Configurator = require('./Configurator.js');
var Factory = require('./Factory.js');
var Runner = require('./Runner.js');
var Screens = require('./Screens');
var mainController = require('./Screens/Controllers/main.js');

var Components = require('./Components');


var App = function (){
	var constructor = function(element, name){
		
		try{
			if(!utils.isString(name))
				throw new Error("Error: invalid app name");

			//start angular app
			this.name = name;
			this.element = element;

			this.newModule = utils.bind(this.newModule, this);
			this.newModule();
			element.setAttribute("ng-app", this.name);

			//iniciar construção de components do app
			Components.construct(this.getModule());

			//iniciar construção de telas
			Screens.construct(this.getModule());

			//adicionar config ao modulo
			this.getModule().config(Configurator.config);

			//adicionar utils
			Factory(this.getModule());


			

		}catch(e){
			var content = document.createElement("p");
			content.innerHTML = "ERRO AO CONSTRUIR APP!"
			Materialize.toast(content, 4000);
			console.log(e);
		}
	}

	return constructor.prototype.newModule = function(){
		
		return angular.module(this.name, ['ui.router'])
		.run(Runner.run)
		.controller('main', mainController);
		
		
	},

	constructor.prototype.getModule = function(){
		return angular.module(this.name);
	},
	constructor;
}
module.exports = App();