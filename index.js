import express from "express";
import mongoose from "mongoose";
import postRouter from "./Routes/posts-routes";
import userRouter from "./Routes/user-routes";
import cors from "cors";
import dotenv from "dotenv";
mongoose.set("strictQuery", true);

const app = express();
dotenv.config();
app.use(cors());
// app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter);
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URL).catch((err) => console.log(err));

// if(process.env.NODE_ENV ==="production"){
//   app.use(express.static('client/build'));
//   // const path = require("path")
//   // app.get('*',(req,res)=>{
//   //   res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//   // })
// }

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT} successfully`);
});
