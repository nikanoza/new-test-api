import express from "express";
import cors from "cors";

import noteRouter from "./routes/note-router.js";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", noteRouter);

app.listen(4444);
