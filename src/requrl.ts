import { IncomingMessage } from 'http'
import isHTTPS from 'is-https'

const _location = typeof location !== 'undefined' ? location : {
  origin: undefined
}

export default function getURL (req?: IncomingMessage) : string {
  if (!req) {
    return _location.origin
  }
  return encodeURI(
    ('http' + (isHTTPS(req) ? 's' : '') + '://') +
    (req.headers['x-forwarded-host'] || req.headers.host) +
    req.url
  )
}
