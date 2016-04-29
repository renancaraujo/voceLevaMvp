import ctrl from './Controllers/start.js';
import dir from './Views/start.js';

var params = {
	title: "Inicio",
	topbar: {
		hide: false,
		semiTransparent: false,
		hideTitle: true,
		transparent: false
	}
};




module.exports = {
	name: "startscreen",
	opts: {
		controller: ctrl,
		directive: dir,
		state: {
			params: params,
			url: '/start',
			view: {
				template: '<startscreen></startscreen>'
			}
		}
	}
};






