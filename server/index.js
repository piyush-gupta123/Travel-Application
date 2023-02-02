import express from "express";
import mongoose from "mongoose";
import postRouter from "./Routes/posts-routes";
import userRouter from "./Routes/user-routes";
import cors from 'cors';
mongoose.set("strictQuery", true);

const app = express();
app.use(cors());
app.use(express.json());
app.use('/users',userRouter);
app.use('/posts',postRouter);
mongoose
  .connect(
    `mongodb+srv://Piyush_Gupta:Piyush%401234@cluster0.gxwijuy.mongodb.net/Travel?retryWrites=true&w=majority`
  )
  .then(() => app.listen(5000))
  .then(() => console.log(`Server is connected successfully at PORT 5000`))
  .catch((err) => console.log(err));
