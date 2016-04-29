import ctrl from './Controllers/signin.js';
import dir from './Views/signin.js';

var params = {
	title: "Login",
	topbar: {
		hide: true,
		semiTransparent: false,
		hideTitle: false,
		transparent: false
	}
};




module.exports = {
	name: "signinscreen",
	opts: {
		controller: ctrl,
		directive: dir,
		state: {
			params: params,
			url: '/signIn',
			view: {
				template: '<signinscreen></signinscreen>'
			}
		}
	}
};






