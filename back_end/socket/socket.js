

// server/socket/socket.js
const setupSocket = (server) => {
    const io = require('socket.io')(server, {
      cors: {
        origin: '*', // Cấu hình CORS nếu cần thiết
        methods: ['GET', 'POST']
      }
    });
  
    // Xử lý kết nối của client
    io.on('connection', (socket) => {
      console.log('A user connected', socket.id);
  
      // Lắng nghe sự kiện 'join_room' từ client
      socket.on('join_room', (room) => {
        socket.join(room);
        console.log(`User ${socket.id} joined room ${room}`);
      });
  
      // Lắng nghe sự kiện 'send_message' từ client
      socket.on('send_message', (data) => {
        const { room, message } = data;
        io.to(room).emit('receive_message', message);
        console.log(`Message sent to room ${room}:`, message);
      });
  
      // Lắng nghe sự kiện 'disconnect'
      socket.on('disconnect', () => {
        console.log('User disconnected', socket.id);
      });
    });
  };
  
  module.exports = setupSocket;
  
