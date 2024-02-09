import express from "express";
import mongoose from "mongoose";
import postRouter from "./Routes/posts-routes.js";
import userRouter from "./Routes/user-routes.js";
import cors from "cors";
import dotenv from "dotenv";

mongoose.set("strictQuery", true);

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter);
mongoose.connect(process.env.MONGO_URL)
.then(()=>app.listen(process.env.PORT))
.then(()=>`Server Is running at ${process.env.PORT}`)
.catch((err) => console.log(err));

// app.use(express.static(path.join(__dirname,"./client/build")));
// app.get('*',(_,res)=>{
//   const currpath = path.join(__dirname,'./client/build/index.html')
//   const resolvedPath = path.resolve(currpath)
//   res.sendFile(resolvedPath,
//   (err)=>{
//     res.status(500).send(err);
//   })
// })

// app.listen(5000)


// app.listen(PORT, () => {
//   console.log(`Server is running at ${PORT} successfully`);
// });
