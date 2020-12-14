import { IncomingMessage } from 'http'
import isHTTPS from 'is-https'

const _location = typeof location !== 'undefined' ? location : {
  origin: '',
  pathname: '/'
}

export default function getURL (req?: IncomingMessage, includePath?: boolean) : string {
  if (!req) {
    return _location.origin + (includePath ? _location.pathname : '')
  }
  return encodeURI(
    ('http' + (isHTTPS(req) ? 's' : '') + '://') +
    (req.headers['x-forwarded-host'] || req.headers.host) +
    (includePath ? req.url : '')
  )
}
