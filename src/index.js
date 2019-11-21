import isHTTPS from 'is-https'

const _location = typeof location !== 'undefined' ? location : {}

export default function reqURL (req) {
  if (!req) {
    return _location.href
  }
  return 'http' + (isHTTPS(req) ? 's' : '') + '://' + req.headers.host + req.url
}
