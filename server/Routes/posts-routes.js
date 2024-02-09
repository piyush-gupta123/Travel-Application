import express from 'express';
import { createPosts, deletePost, getAllPosts, getPostByID, updatePosts } from '../Controllers/posts-controllers.js';


const postRouter = express.Router();

postRouter.get('/',getAllPosts);
postRouter.get('/:id',getPostByID);
postRouter.post('/create',createPosts);
postRouter.put('/update/:id',updatePosts);
postRouter.delete('/delete/:id',deletePost);


export default postRouter;