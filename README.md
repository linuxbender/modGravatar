modGravatar for module Node.js
===========

Basic url implementation of the Gravatar API.

modGravatar.getUrl function need a email and image size.
getUrl(email<string>, size<number>)

## Basic setup  in your Node
```html
	var gravatar = require('modGravatar');	
	var url = gravatar.getUrl('email@demo.dev', 150 );
	console.log('my Gravatar url for my src attribut in my img Tag : ' + url );
```
##License
Copyright (c) daniel glenn

MIT license - [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)
