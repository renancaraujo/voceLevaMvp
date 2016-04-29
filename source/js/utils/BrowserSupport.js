var support = {},

  /** tests list */
  tests = null,

  docElement = document.documentElement,

  /** the div to test properties on */
  testDiv = document.createElement('div'),

  testDivStyle = testDiv.style,

  prefixes = ' Webkit WebKit Moz O Ms'.split(' '),

  cssprefixes = ' -webkit- -webkit- -moz- -o- -ms-'.split(' '),

  prefixesLength = prefixes.length,

  useCache = false,

  /**
   * check if the given property exists in div.style or window
   * and returns the prefixed version or if not found, false;
   *
   * @param {string} prop Name of the property to check
   * @param {Boolean} cssformat return css prefixed version ? default: false
   * @return {String|Boolean} prefixed version, or if not found, false.
   */
  testProperty = function(prop, cssformat) {

    if( useCache & prop in support ){
      return support[prop];
    }

    var formatForCss = typeof cssformat != "undefined" ? cssformat : false,
      propd, l = prefixesLength;

    propd = prop.replace(/(^[a-z])/g, function(val) {
      return val.toUpperCase();
    }).replace(/\-([a-z])/g, function(val, a) {
      return a.toUpperCase();
    });

    while (l--) {
      if (prop in testDivStyle) {
        return prop;
      } else if (prefixes[l] + propd in testDivStyle) {
        return formatForCss ? cssprefixes[l] + prop.toLowerCase() : prefixes[l] + propd;
      } else if ( typeof window[prefixes[l].toLowerCase() + propd] !== 'undefined' ) {
        return prefixes[l].toLowerCase() + propd;
      } else if (typeof window[prefixes[l] + propd] != 'undefined') {
        return prefixes[l] + propd;
      }
    }

    return false;

  };


tests = {

  prefix: function() {
    var prefixedProp = testProperty('transform');
    return !!prefixedProp ? prefixedProp.replace('Transform', '') : '';
  },

  cssprefix: function() {
    var prefixedProp = testProperty('transform', true);
    return !!prefixedProp ? prefixedProp.replace('transform', '') : '';
  },

  transform: function() {
    return testProperty('transform');
  },

  transformCss: function() {
    return testProperty('transform', true);
  },

  transform3d: function() {
    return ('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix()) || !! testProperty('perspective');
  },

  translateZ: function() {
    return this.transform3d() ? 'translateZ(0)' : '';
  },

  transformOrigin: function() {
    return testProperty('transformOrigin');
  },

  backfaceVisibility: function() {
    return testProperty('backfaceVisibility');
  },

  perspective: function() {
    return testProperty('perspective');
  },

  perspectiveOrigin: function() {
    return testProperty('perspectiveOrigin');
  },

  transition: function() {
    return testProperty('transition');
  },

  transitionProperty: function() {
    return testProperty('transitionProperty');
  },

  transitionDuration: function() {
    return testProperty('transitionDuration');
  },

  transitionTimingFunction: function() {
    return testProperty('transitionTimingFunction');
  },

  transitionDelay: function() {
    return testProperty('transitionDelay');
  },

  transitionEvent: function() {
    return testProperty('transitionEvent');
  },

  transitionEventPrefix: function() {
    return !!testProperty('transitionEvent') ? testProperty('transitionEvent').replace('TransitionEvent', '').toLowerCase() : '';
  },

  transitionEnd: function() {
    return this.transitionEventPrefix() !== '' ? this.transitionEventPrefix() + 'TransitionEnd' : 'transitionend';
  },

  touch: function() {
    return ('ontouchstart' in window) /*|| (navigator.maxTouchPoints > 0)*/ || (navigator.msMaxTouchPoints > 0);
  },

  //IE10 Pointers
  msPointer: function() {
    return !!window.navigator.msPointerEnabled;
  },

  //IE11 Pointers
  pointer: function() {
    return !!window.navigator.pointerEnabled;
  },

  ipad: function(){ return ( navigator.userAgent.match(/.*(iPad).*/) ) ? true : false; },
  iphone: function(){ return ( navigator.userAgent.match(/.*(iPhone).*/) ) ? true : false },
  android: function(){ return ( navigator.userAgent.match(/.*(Android).*/) ) ? true : false; },

  /** browser */
  ltIE9: function(){ return window.attachEvent && !window.addEventListener; },

  uidown: function(){ return this.touch() ? 'touchstart' : (this.pointer() ? 'pointerdown' : (this.msPointer() ? 'MSPointerDown' : 'mousedown') ); },
  uiup: function(){ return this.touch() ? 'touchend' : (this.pointer() ? 'pointerup' : (this.msPointer() ? 'MSPointerUp' : 'mouseup') ); },
  uimove: function(){ return this.touch() ? 'touchmove' : (this.pointer() ? 'pointermove' : (this.msPointer() ? 'MSPointerMove' : 'mousemove') ); },
  uienter: function(){ return (this.pointer() ? 'pointerenter' : (this.msPointer() ? 'mouseenter' : 'mouseenter') ); },
  uileave: function(){ return (this.pointer() ? 'pointerleave' : (this.msPointer() ? 'mouseleave' : 'mouseleave') ); },

  pointerdown: function(){ return this.touch() ? 'touchstart' : (this.pointer() ? 'pointerdown' : (this.msPointer() ? 'MSPointerDown' : 'mousedown') ); },
  pointerup: function(){ return this.touch() ? 'touchend' : (this.pointer() ? 'pointerup' : (this.msPointer() ? 'MSPointerUp' : 'mouseup') ); },
  pointermove: function(){ return this.touch() ? 'touchmove' : (this.pointer() ? 'pointermove' : (this.msPointer() ? 'MSPointerMove' : 'mousemove') ); },
  pointerenter: function(){ return (this.pointer() ? 'pointerenter' : (this.msPointer() ? 'mouseenter' : 'mouseenter') ); },
  pointerleave: function(){ return (this.pointer() ? 'pointerleave' : (this.msPointer() ? 'mouseleave' : 'mouseleave') ); },
  
  smallscreen: function(){  return window.innerWidth < 700 },
  
  canvas: function(){
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
  },

  video: function(){
    var video = document.createElement("video");
    return typeof video.play != "undefined";
  },

  audio: function(){
    var audio = document.createElement("audio");
    return typeof audio.play != "undefined";
  }

};

var featureName;
for (var feature in tests) {
  if (tests.hasOwnProperty(feature)) {
    featureName = feature;
    support[featureName] = tests[feature]();
  }
}

/**
 * check if the given property exists in div.style or window
 * and returns a boolean
 *
 * @param {string} prop Name of the property to check
 * @return {Boolean} true, or if not found, false.
 */
support['test'] = function(prop) {
  return !!testProperty(prop);
};

/**
 * check if the given property exists in div.style or window and
 * returns it with the vendor prefixe
 *
 * @param {string} prop Name of the property to check
 * @return {String|Boolean} prefix + prop, or if not found, false.
 */
support['getPrefixed'] = function(prop) {
  return testProperty(prop);
};

/**
 * same as getPrefixed but it returns the css perfixed version
 *
 * @param {string} prop Name of the property to check
 * @return {String|Boolean} prefix + prop, or if not found, false.
 */
support['getCssPrefixed'] = function(prop) {
  return testProperty(prop, true);
};

useCache = true;

module.exports = support;