import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: true, credentials: true, methods: ["GET","POST"] }
})

const userSocketMap = {};

io.on('connection', (socket)=>{
    console.log("a user connected", socket.id);

    const userId = socket.handshake.query.userId
    if(userId != "undefined") userSocketMap[userId] = socket.id;
    io.emit("getOnlineUser", Object.keys(userSocketMap));

    socket.on('disconnected', ()=>{
        delete userSocketMap[userId];
        io.emit("getOnlineUser", Object.keys(userSocketMap));
    })
})
export { app, io, server }