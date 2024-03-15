import express from "express";
const app = express();
import { config } from "dotenv";
import cookieParser from 'cookie-parser';
config();
import { connection } from "./src/db/db.js"
const port = process.env.PORT || 8000;
import cors from "cors";

import router from "./src/router/index.js"

connection();

app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1", router);

app.listen(port, () => console.log(`server is running ${port}`));