import isHTTPS from 'is-https'

const _location = typeof location !== 'undefined' ? location : {}

export default function getURL (req) {
  if (!req) {
    return _location.href
  }
  return encodeURI('http' + (isHTTPS(req) ? 's' : '') + '://' +
    (req.headers['x-forwarded-host'] || req.headers.host) +
    req.url)
}
