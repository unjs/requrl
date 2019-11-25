import { Server } from 'http'
import gerURL from '.'

const server = new Server((req, res) => {
  res.end(gerURL(req))
})

server.listen(3000, () => {
  console.log('Listening on http://localhost:3000') // eslint-disable-line no-console
})
