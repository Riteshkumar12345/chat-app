import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRoutes from "./routes.js/userRoutes.js";
import messageRouter from "./routes.js/messageRoute.js";
import { Server } from "socket.io";


const app = express();
const server = http.createServer(app);

export const io = new Server(server, {
    cors: {origin:"*"}
});

export const userSoketMap = {};
io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;
    console.log("User connected:", userId);

    if(userId) {
        userSoketMap[userId] = socket.id;
    }

    io.emit("getOnlineUsers", Object.keys(userSoketMap));

    socket.on("disconnect", () => {
        console.log("User disconnected:", userId);
        delete userSoketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSoketMap));
    })
})


app.use(express.json({limit: "4mb"}));
app.use(cors());

app.use("/api/status", (req, res) =>
    res.send("Server is live")
 );
 app.use("/api/auth", userRoutes);
 app.use("/api/messages", messageRouter);

 await connectDB();

 if(process.env.NODE_ENV !== "production"){
    const PORT = process.env.PORT || 5000;
    server.listen(PORT, ()=> console.log("Server is running no PORT:" +PORT) );
 }

 export default server;
 