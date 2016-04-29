var assign = require('lodash.assign');
var templatesPath = 'part/'
//classe screen
//serve como wrapper entre controller, state, diretiva de template, name, etc
module.exports = function(modulo, set){
	var construtor = function(name, opts){
		if(!utils.isString(name)){
			throw new Error("Error: invalid screen name");
			return;
		}
		if  ( (typeof opts == 'undefined')  ||
			  (typeof opts.controller == 'undefined')  ||
			  (typeof opts.directive == 'undefined')
			){
			throw new Error("Error: invalid screen opts");
		return;
		}
		this.name = name;

		this.config = utils.bind(this.config, this);

		this.controller = opts.controller;
		this.directive = opts.directive;
		this.state = opts.state;

		//adicionar controllers e diretiva ao modulo
		modulo 	.controller(this.name, this.controller)
				.directive(this.name, this.directive);


		//adicionar ao set
		set[name] = this;		

	};
	return construtor.prototype.config = function(stateProvider){
		var main = {
				controller: this.name,
				controllerAs: this.name
		}
		main = assign(main, this.state.view);

		stateProvider
		.state(this.name, {
			params: this.state.params,
			url: this.state.url,
			views: {
				main: main
			}
		});

	}, construtor;
};



