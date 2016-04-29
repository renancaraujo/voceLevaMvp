import Screen from './Screen.js';


//modules
import welcomeScreen from './welcomeScreen.js';
import signUpScreen from './signUpScreen.js';
import signInScreen from './signInScreen.js';
import startScreen from './startScreen.js';
import myProfileScreen from './myProfileScreen.js';
import editProfileScreen from './editProfileScreen.js';




//set de screens
var set = {};

var MyScreen;
function construct(modulo){
	
 	MyScreen = Screen(modulo,set);
	
 	new MyScreen(welcomeScreen.name,  welcomeScreen.opts);
 	new MyScreen(signUpScreen.name,  signUpScreen.opts);
 	new MyScreen(signInScreen.name,  signInScreen.opts);
 	new MyScreen(startScreen.name,  startScreen.opts);
 	new MyScreen(myProfileScreen.name,  myProfileScreen.opts);
 	new MyScreen(editProfileScreen.name,  editProfileScreen.opts);
 	

}
function config(stateProvider){
	for(var key in set){
		set[key].config(stateProvider);
	}
}

module.exports = {
	construct: construct,
	config: config,
	set: set,
	getScreen: function(name){
		for(var key in set){
			if(key == name) return set[key];
		}
		return false;
	}
}