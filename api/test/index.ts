// console.log('Hello via Bun!')

import type { Server } from 'bun'

// const server = Bun.serve({
//   port: 3008,
//   fetch(req) {
//     // return new Response('Hello')
//     return Response.json({ msg: 'Hello' })
//   },
// })

export default {
  async fetch(request: Request, server: Server) {
    return Response.json({
      msg: 'Hello',
    })
  },
}
