import News from '../models/news.js'

const createService = (body) => News.create(body);

const findAllService = (offset, limit) => News.find().sort({_id: -1}).skip(offset).limit(limit).populate("user");

const countNews = () => News.countDocuments();

export {
    createService, 
    findAllService,
    countNews,
}