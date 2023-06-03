const express=require('express')
const app=express()
const http=require('http') // need this to build our server
const cors=require('cors')
const {Server}=require('socket.io') //Server is class
app.use(cors())

const server=http.createServer(app)

const io=new Server(server, { //instantiating Server
    cors: {
        origin:'http://localhost:5173', 
        methods:['GET', 'POST']

    }
})

//Detection of connection and disconnection to socket io server
io.on('connection', (socket)=>{
    console.log(`User connected`)

    //listening to join a room event

    socket.on("join_room", (data)=>{
        socket.join(data)
        console.log(`User joined room: ${data}`)
    })

    //listening to send a message socket io event
    socket.on("send_message", (data)=>{
        
        socket.to(data.room).emit("receive_backendMessage", data) //emit socket-io event
        // console.log(data)
    })
    //disconnect from the server
    socket.on("disconnect", ()=>{
        console.log("User disconnected")
    })
})



// const PORT=5173 || process.env.port
server.listen(5174, ()=>console.log(`Server running on port 5174`))