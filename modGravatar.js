/*
modGravatar for Node.js
**********************************************************************
Basic url implementation of the Gravatar API.

Module function: getUrl(email, size)
**********************************************************************
- Email is typeof string e.g : 'demo@demo.com'
- Size is typeof number e.g : 150

Example: 
**********************************************************************
var gravatar = require('modGravatar');
var url = gravatar.getUrl('email@demo.dev', 150 );
console.log('my Gravatar url for my src attribut in my img HTML Tag : ' + url );

Source:
**********************************************************************
github https://github.com/linuxbender/modGravatar

License: 
**********************************************************************
Copyright (c) daniel glenn
MIT license - http://www.opensource.org/licenses/mit-license.php
*/

//
// module dependencie
var crypto = require('crypto');

//
// private md5 func
md5  = function(stringToHash) {
	return crypto.createHash('md5').update(stringToHash).digest('hex');
};

//
// public get url func
exports.getUrl = function (email, size) {
	if ( typeof size === 'undefined' ) {
    		size = 100;
  	}
	return 'https://secure.gravatar.com/avatar/'+ md5(email) +'?s='+ size;	
};