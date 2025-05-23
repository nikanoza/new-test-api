import express from "express";
import { createNote, getAllNotes } from "../controllers/note-controller.js";

const noteRouter = express.Router();

noteRouter.get("/notes", getAllNotes);
noteRouter.post("/notes", createNote);

export default noteRouter;
