import ctrl from './Controllers/welcome.js';
import dir from './Views/welcome.js';

var params = {
	title: "Seja bem vindo!",
	topbar: {
		hide: true,
		semiTransparent: false,
		hideTitle: false,
		transparent: false
	}
};




module.exports = {
	name: "welcomescreen",
	opts: {
		controller: ctrl,
		directive: dir,
		state: {
			params: params,
			url: '/',
			view: {
				template: '<welcomescreen></welcomescreen>'
			}
		}
	}
};






