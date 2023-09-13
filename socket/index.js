const io = require("socket.io")(8800, {
  cors: {
    origin: "http://localhost:5173",
  },
});
let activeUsers = [];
io.on("connection", (socket) => {
  socket.on("new-user-add", (newUserId) => {
    if (!activeUsers.some((user) => user.userId === newUserId)) {
      activeUsers.push({ userId: newUserId, socketId: socket.id });
      console.log("New user added", activeUsers);
    }
    io.emit("get-user", activeUsers);
  });

  //send messages
  socket.on("send-message", (data) => {
    const { receiverId } = data;
    const user = activeUsers.find((user) => user.userId === receiverId);
    if (user) io.to(user.socketId).emit("recieve-message", data);
    console.log("Data", data);
  });

  socket.on("disconect", () => {
    activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
    console.log("User Disconnected", activeUsers);
    io.emit("get-users", activeUsers);
  });
});
