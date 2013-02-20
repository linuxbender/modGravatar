modGravatar for Node.js
===========

Basic url implementation of the Gravatar API.

## Module function: getUrl(email, size)

- Email is typeof string e.g : 'demo@demo.com'
- Size is typeof number e.g : 150

```html
	modGravatar.getUrl(email, size)
```
## Basic setup  in your Node.js app
```html
	var gravatar = require('modGravatar');
	var url = gravatar.getUrl('email@demo.dev', 150 );
	console.log('my Gravatar url for my src attribut in my img HTML Tag : ' + url );
```
##License
Copyright (c) daniel glenn

MIT license - [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)
