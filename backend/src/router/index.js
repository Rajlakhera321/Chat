import express from "express";
const router = express.Router();
import auth from "./auth.js";
import user from './user.js';
import message from "./message.js";

router.use('/auth', auth);
router.use('/message', message);
router.use('/user', user)

export default router;