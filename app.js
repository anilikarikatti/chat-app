const express = require("express");

const app = express();

const {createServer}  = require("http");

const {Server} = require("socket.io");

const {join} = require("path");

const server = createServer(app);

const io = new Server(server);

app.get("/",(req,res)=>{
    res.sendFile(join(__dirname , "./public/index.html"))
})


io.on("connection",socket => {
    socket.on("chat message",(msg)=>{
        io.emit("chat message",msg)
        // socket.broadcast.emit("chat message",msg)  // broad cast used for send msg to all except sender 
    })
    
})

server.listen(8000 , ()=>{
    console.log(`server listening port 8000`);
    
})