import express from "express";
import { getUserForSidebar } from "../controller/user.js";
import { verifyToken } from "../middleware/jwtToken.js";
const router = express.Router();

router.get('/', verifyToken, getUserForSidebar);

export default router;