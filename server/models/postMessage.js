import mongoose from "mongoose";

// creating model for post
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    // arrays of String
    tags: [String],
    selectedFile: String,
    // object of likecount
    likeCount: {
        type: Number,
        default: 0
    },
    // object of createdAt
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// creating schema to model
const PostMessage = mongoose.model('PostMessage', postSchema);
// exporting mongoose model
export default PostMessage;