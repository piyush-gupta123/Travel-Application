import mongoose from "mongoose";

const schema = mongoose.Schema;

const userSchema = new schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  Password: { type: String, required: true, minlength: 8 },
  Posts: [{ type: mongoose.Types.ObjectId, ref: "Post" }],
});

export default mongoose.model("User", userSchema);
