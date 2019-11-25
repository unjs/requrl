# urlful

[![npm](https://flat.badgen.net/npm/v/urlful)](https://www.npmjs.com/package/urlful)
[![dt](https://flat.badgen.net/npm/dt/urlful)](https://www.npmjs.com/package/urlful)
[![bundlephobia](https://flat.badgen.net/bundlephobia/minzip/urlful)](https://bundlephobia.com/result?p=urlful)

Easily grab full URL from a request ([http.IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage)) object.

## Features

- Universal (browser and node.js) support
- Detect HTTPS requests using [is-https](https://github.com/nuxt-community/is-https)
- Support `x-forwarded-proto` and `x-forwarded-host`
- Always encode URI
- Super Small

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
getURL (request?: http.IncomingMessage) : string
```

Example:

```js
const url = getURL(req)
// http://localhost:3000/aaf/dfdf
// https://www.foo.com/foo/bar
```

## License

MIT
