import ctrl from './Controllers/signup.js';
import dir from './Views/signup.js';

var params = {
	title: "Cadastro",
	topbar: {
		hide: true,
		semiTransparent: false,
		hideTitle: false,
		transparent: false
	}
};




module.exports = {
	name: "signupscreen",
	opts: {
		controller: ctrl,
		directive: dir,
		state: {
			params: params,
			url: '/signUp',
			view: {
				template: '<signupscreen></signupscreen>'
			}
		}
	}
};






