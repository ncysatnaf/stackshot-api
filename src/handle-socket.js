export default server => {
  global.io = require('socket.io')(server)

  io.on('connection', socket => {

    // console.log('connection')

    socket.on('join', (data) => {
      const {uid} = data

      console.dir(`[user]${uid} joined`, {colors: true})
      socket.join(uid)
    })

    socket.on('message', data => {

      data === 'hello' && socket.emit('message','hi')
    })

    socket.on('new-reply', data => {
      const { uid, to, content } = data

      console.dir(`[user]${uid} reply [user]${to} with [content]${content}`, {colors: true})
      io.sockets.to(to).emit('message', {message: 'new-reply', uid, content})
    })

  })

  return io
}
