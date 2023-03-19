import express from 'express';
import cors from 'cors';
import { getAllUsers, loginUser, registerUser } from '../Controllers/user-controllers';

const userRouter = express.Router();

userRouter.get('/',getAllUsers);
userRouter.post('/register', registerUser);
userRouter.post('/login',loginUser);



export default userRouter;