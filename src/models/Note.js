import { Schema, model } from "mongoose";
import { v4 as uuid } from "uuid";

const { String } = Schema.Types;

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  id: {
    type: String,
    default: uuid,
    required: true,
    unique: true,
  },
});

const Note = model("Note", noteSchema);

export default Note;
