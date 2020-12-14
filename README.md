# requrl

[![npm](https://flat.badgen.net/npm/v/requrl)](https://www.npmjs.com/package/requrl)
[![dt](https://flat.badgen.net/npm/dt/requrl)](https://www.npmjs.com/package/requrl)
[![bundlephobia](https://flat.badgen.net/bundlephobia/minzip/requrl)](https://bundlephobia.com/result?p=requrl)

Grab full URL from [request](https://nodejs.org/api/http.html#http_class_http_incomingmessage).

## Features

- Universal (browser and node.js) support
- Detect HTTPS requests using [is-https](https://github.com/nuxt-contrib/is-https)
- Support `x-forwarded-proto` and `x-forwarded-host`
- Always encode URI
- Super Small

## Usage

```js
import getURL from 'requrl'
// OR
const getURL = require('requrl')
```

Function signuture is:

```ts
function getURL(req?: IncomingMessage, includePath?: boolean): string
```

Example:

```js
const url = getURL(req)
// http://localhost:3000
// https://www.foo.com
```

## License

MIT
