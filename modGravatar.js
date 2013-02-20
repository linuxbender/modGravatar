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
	return 'https://secure.gravatar.com/avatar/'+ md5(email) +'?s='+ size;	
};