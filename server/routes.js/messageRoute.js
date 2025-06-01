import express from 'express';
import { protectRoute } from '../middleware/auth.js';
import { getMessages, getUsersForSiderbar, markMessagesAsSeen, sendMessage } from '../controllers/messageControllers.js';

const messageRouter = express.Router();

messageRouter.get("/users", protectRoute,getUsersForSiderbar);
messageRouter.get("/:id", protectRoute,getMessages);
messageRouter.put("/mark/:id", protectRoute,markMessagesAsSeen);
messageRouter.post("/send/:id", protectRoute,sendMessage);

export default messageRouter;