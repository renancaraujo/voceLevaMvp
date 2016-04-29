import ctrl from './Controllers/myprofile.js';
import dir from './Views/myprofile.js';

var params = {
	title: "Meu perfil",
	topbar: {
		hide: false,
		semiTransparent: false,
		hideTitle: true,
		transparent: true
	}
};




module.exports = {
	name: "myprofilescreen",
	opts: {
		controller: ctrl,
		directive: dir,
		state: {
			params: params,
			url: '/myProfile',
			view: {
				template: '<myprofilescreen></myprofilescreen>'
			}
		}
	}
};






