import News from '../models/news.js'

const createService = (body) => News.create(body);

const findAllService = () => News.find();

export default {
    createService, 
    findAllService
}