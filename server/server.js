const express = require("express");
const app = express();
const http = require("http"); // need this to build our server
const cors = require("cors");
const { Server } = require("socket.io"); //Server is class
app.use(cors());

const server = http.createServer(app);

// instantiating Server
const io = new Server(server, {
  cors: {
    origin: "https://real-time-chat-web-sockets-f.onrender.com/",
    methods: ["GET", "POST"],
  },
});

//Detection of connection and disconnection to socket io server
io.on("connection", (socket) => {
  console.log(`User connected`);

  //listening to join a room event

  socket.on("join_room", (data) => {
    socket.join(data.chatRoomName);
    console.log(`User ${data.userName} joined room: ${data.chatRoomName}`);
  });

  //listening to send a message socket io event
  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_backendMessage", data); //emit socket-io event
    // console.log(data)
  });
  //disconnect from the server
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT=process.env.PORT
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
