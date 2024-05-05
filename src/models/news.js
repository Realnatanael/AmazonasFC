import mongoose from  "mongoose";

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    text: {
        type: String,
        require: true,
    },
    banner: {
        type: String,
        require: true,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    likes:{
        type: Array,
        of: {
            userId: mongoose.Schema.Types.ObjectId,
            username: String, // username do usuário que curtiu
            token: String, // token do usuário que curtiu
        }
    },
    comments:{
        type: Array,
        of: {
            idComment: String,
            userId: mongoose.Schema.Types.ObjectId,
            username: String,
            comment: String,
            createdAt: Date,
        },
        require: true,
    }
});

const News = mongoose.model("News", NewsSchema);

export default News;