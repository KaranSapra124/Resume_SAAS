import { Schema, model } from "mongoose";

interface userInterface {
  name: string;
  email: string;
  picture: string;
  plan: Object;
  resumes: [];
  applications: [];
}

const User = new Schema<userInterface>({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  picture: { type: String },
  plan: { type: Object, default: null },
  applications: { type: [], default: [] },
  resumes: { type: [], default: [] },
});

export default model("User", User);
