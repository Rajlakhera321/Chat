import express from "express";
import { sendMessage, getMessages } from "../controller/message.js";
import { verifyToken } from "../middleware/jwtToken.js";
const router = express.Router();

router.post('/send/:id', verifyToken, sendMessage);

router.get('/:id', verifyToken, getMessages);

export default router;