const { Server } = require('http')
const reqUrl = require('..')

const server = new Server((req, res) => {
  res.end(reqUrl(req))
})

server.listen(3000, () => {
  console.log('Listening on http://localhost:3000') // eslint-disable-line no-console
})
