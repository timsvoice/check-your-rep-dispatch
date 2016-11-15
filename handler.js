(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _mailgunJs = __webpack_require__(1);

	var _mailgunJs2 = _interopRequireDefault(_mailgunJs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
	var domain = process.env.MAILGUN_CHECKYOURREP_DOMAIN;
	var mailgun = (0, _mailgunJs2.default)({ apiKey: MAILGUN_API_KEY, domain: domain });

	module.exports.mailer = {
	  send: function send(data) {
	    var mail = {
	      from: 'postmaster@checkyourrep.org',
	      to: 'timsethvoice@gmail.com',
	      subjec: 'Your Bills',
	      text: 'Test mail',
	      'o:testmode': true
	    };
	    if (data) {
	      var _mail = {
	        from: 'postmaster@checkyourrep.org',
	        to: data.user.email,
	        subjec: 'Your Bills',
	        text: data.message,
	        'o:testmode': data.testmode
	      };
	    }
	    return new Promise(function (resolve, reject) {
	      mailgun.messages().send(mail).then(function (res) {
	        resolve(res);
	      }).catch(function (err) {
	        reject(err);
	      });
	    });
	  }
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("mailgun-js");

/***/ }
/******/ ])));