import ctrl from './Controllers/editprofile.js';
import dir from './Views/editprofile.js';

var params = {
	title: "Editar perfil",
	topbar: {
		hide: false,
		semiTransparent: false,
		hideTitle: false,
		transparent: false
	}
};




module.exports = {
	name: "editprofilescreen",
	opts: {
		controller: ctrl,
		directive: dir,
		state: {
			params: params,
			url: '/editProfile',
			view: {
				template: '<editprofilescreen></editprofilescreen>'
			}
		}
	}
};






