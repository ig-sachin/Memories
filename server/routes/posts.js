import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';
// this file will contain all the routes realted to posts
const router = express.Router();

// it will reach to localhost:5000/posts/
// because we have added a middleware in index.js

// this will get me all the posts
router.get('/', getPosts);

// this will add post in database
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;