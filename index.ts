// console.log('Hello via Bun!')

const server = Bun.serve({
  port: 3008,
  fetch(req) {
    // return new Response('Hello')
    return Response.json({ msg: 'Hello' })
  },
})
