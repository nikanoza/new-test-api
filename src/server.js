import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import noteRouter from "./routes/note-router.js";
import bodyParser from "body-parser";
import connectToDatabase from "./config/database.js";

dotenv.config();
connectToDatabase();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", noteRouter);

app.listen(4444);
