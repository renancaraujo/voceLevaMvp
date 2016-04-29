import Component from './Component.js';

import topbar from './topbar.js';
import mainmenu from './mainmenu.js';
import bottomlinks from './bottomlinks.js';
import startmap from './startmap.js';

var set = {};

var MyComponent;
function construct(modulo){
	MyComponent = Component(modulo, set);

	new MyComponent(topbar);
	new MyComponent(mainmenu);
	new MyComponent(bottomlinks);
	new MyComponent(startmap);



}

module.exports = {
	construct : construct
}