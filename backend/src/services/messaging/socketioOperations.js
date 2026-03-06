let socketsConnected = new Set();
let onlineUsers = [];

function socketIoOperations(io, socket) {
  console.log(`A user connected ${socket.id}`);

  socketsConnected.add(socket.id);
  socket.on("addNewUser", (userId) => {
    !onlineUsers.some((user) => user.id === userId) &&
      onlineUsers.push({
        id: userId,
        socketId: socket.id,
      });

    console.log("onlineUsers", onlineUsers);

    io.emit("getOnlineUsers", onlineUsers);
  });

  socket.on("sendMessage", (message) => {
    console.log(message.recipientId, message);
    const user = onlineUsers.find(
      (user) => user.id === message.recipientid
    );
    console.log("prabhat", user);
    if (user) {
      console.log("prabhat");
      io.to(user.socketId).emit("getMessage", message);
    }
  });

  io.emit("Total-Connected", socketsConnected.size);

  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);
    io.emit("getOnlineUsers", onlineUsers);
    console.log(`A user disconnected ${socket.id}`);
    socketsConnected.delete(socket.id);
    io.emit("Total-Connected", socketsConnected.size);
  });
}

console.log("onlineUsers", onlineUsers);

module.exports = socketIoOperations;
