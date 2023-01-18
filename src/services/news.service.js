import News from '../models/News.js';

const createService = (body) => News.create(body);

const findAllService = (offset, limit) => News.find().sort({_id: -1}).skip(offset).limit(limit);

export { createService, findAllService};