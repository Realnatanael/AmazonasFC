import News from '../models/news.js'
import userService from './user.service.js';

export const createService = (body) => News.create(body);

export const findAllService = (offset, limit) => News.find().sort({_id: -1}).skip(offset).limit(limit).populate("user");

export const countNews = () => News.countDocuments();

export const topNewsService = () => News.findOne().sort({_id: -1}).populate("user");

export const findByIdService = (id) => News.findById(id).populate("user");

export const searchByTitleService = (title) => News.find({
    title: {$regex: `${title || ""}`, $options: "i"}
}).sort({_id: -1}).populate("user");

export const byUserService = (id) => News.find({user: id}).sort({_id: -1}).populate("user");

export const updateService = (id, title, text, banner) => News.findOneAndUpdate({_id: id}, {title, text, banner}, {rawResult: true,});

export const eraseService = (id) => News.findByIdAndDelete({_id: id});

export const likeNewsService = (idNews, userId) => News.findOneAndUpdate(
    {_id: idNews, "likes.userId": {$nin: [userId]}}, 
    {$push: {likes: {userId, created: new Date()}}}
);

export const deleteLikeNewsService = (idNews, userId) => News.findOneAndUpdate(
    {_id: idNews}, {$pull: {likes: {userId}}}
);

export const addCommentService = async (idNews, comment, userId) => {
    const idComment = Math.floor(Date.now() * Math.random()).toString(36);
    const user = await userService.findByIdService(userId);
    const username = user.username;

    const updatedNews = await News.findOneAndUpdate(
        { _id: idNews },
        { $push: { comments: { idComment, userId, username, comment, createdAt: new Date() } } },
        { new: true } // Retorna o documento após a atualização
    );

    // Encontre o novo comentário no array de comentários
    const newComment = updatedNews.comments.find(comment => comment.idComment === idComment);

    return newComment;
};
export const deleteCommentService = (idNews, idComment, userId) => News.findOneAndUpdate({_id: idNews}, {$pull: {comments: {idComment, userId}}})

export const isLikedService = (idNews, userId) => News.findOne({_id: idNews, "likes.userId": userId});
