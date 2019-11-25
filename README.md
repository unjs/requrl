# urlful

Easily grab full URL from a request ([http.IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage)) object.

## Features

- Browser fall-back
- Detect HTTPS requests using [is-https](https://github.com/nuxt-community/is-https)
- Super Small (282B min-gzip)

## Usage

ESM import:

```js
import getURL from 'urlful'
```

CommonJS import:

```js
const getURL = require('urlful')
```

Default export signuture is:

```ts
getURL(request?: http.IncomingMessage): String
```

Example:

```js
const url = getURL(req)
// http://localhost:3000/aaf/dfdf
// https://www.foo.com/foo/bar
```

## License

MIT
