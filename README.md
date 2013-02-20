modGravatar for module Node.js
===========

Basic url implementation of the Gravatar API.

modGravatar.getUrl function need an email and image size.

email is typeof string
size is typeof number

```html
	modGravatar.getUrl(email, size)
```
## Basic setup  in your Node.js app
```html
	var gravatar = require('modGravatar');	
	var url = gravatar.getUrl('email@demo.dev', 150 );
	console.log('my Gravatar url for my src attribut in my img Tag : ' + url );
```
##License
Copyright (c) daniel glenn

MIT license - [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)
