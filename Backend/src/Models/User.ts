import { Schema, model } from "mongoose";

interface userInterface {
  name: string;
  email: string;
  picture: string;
}

const User = new Schema<userInterface>({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  picture: { type: String },
});

export default model("User", User);
