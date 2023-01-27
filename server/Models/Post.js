import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, reuired: true },
  location: { type: String, required: true },
  date: { type: String, required: true },
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.model("Post", postSchema);
