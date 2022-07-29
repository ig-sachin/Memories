import express from 'express';
import mongoose from 'mongoose';
// we will create all the handlers or logic for routes/posts.js and import those function their

// this gives us access to our real model
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        // this will get me all the post which is present inside the database
        // we are adding await because .find() method is async
        const postMessages = await PostMessage.find();
        // console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        console.log("h3");
        res.status(404).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {
    // with post request we have access to req.body which contain data which is to be written in database
    const post = req.body;
    // creating my post
    const newPost = new PostMessage(post);
    try {
        // adding post to database
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updatePost = async (req, res) => {
    // we can get the content of url by using req.params
    // id:_id this will rename
    const { id: _id } = req.params;
    const post = req.body;
    // below we are checking whether the ID that we are getting through URL is valid Mongoose ID or not
    // If not then we will return a error
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with that ID')

    // {...post, _id} this will spread all of the property which is inside post and add _id property
    // here we are adding new:true so that we can recieve the updated version of post
    await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
    res.json({ message: 'Post Updated' });
};

export const deletePost = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with that ID')
    await PostMessage.findByIdAndRemove(_id);
    res.json('Post Deleted Successfully');

};

export const likePost = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with that ID')
    const post = await PostMessage.findById(_id);
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { likeCount: post.likeCount + 1 }, { new: true });
    res.json(updatedPost);
};