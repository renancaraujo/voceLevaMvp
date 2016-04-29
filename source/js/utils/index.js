import assign from 'lodash.assign';
import masterUtils from './utils.js';
import setTimeout from './$setTimeout.js';
import BrowserSupport from './BrowserSupport.js';
import Cubic from './Cubic.js';
import degToRad from './degToRad.js';
import Dispatcher from './Dispatcher.js';
import dom from './dom.js';
import EnterFrame from './EnterFrame.js';
import EventDispatcher from './EventDispatcher.js';
import EventList from './EventList.js';
import parse from './parse.js';
import bind from './bind.js';
import requestFullScreen from './requestFullScreen.js';

var utils = {
	setTimeout : setTimeout,
	BrowserSupport : BrowserSupport,
	Cubic : Cubic,
	degToRad : degToRad,
	Dispatcher : Dispatcher,
	dom : dom,
	EnterFrame : EnterFrame,
	EventDispatcher : EventDispatcher,
	EventList : EventList,
	parse : parse,
	bind: bind,
	requestFullScreen : requestFullScreen
};
utils = assign(utils, masterUtils);
module.exports = utils;