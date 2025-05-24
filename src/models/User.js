import { Schema, model } from "mongoose";
import { v4 as uuid } from "uuid";

const { String } = Schema.Types;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    default: uuid,
    required: true,
    unique: true,
  },
});

const User = model("User", userSchema);

export default User;
