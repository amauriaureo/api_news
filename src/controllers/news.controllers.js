import { createService, findAllService } from "../services/news.service.js";
// import { ObjectId } from "mongoose";

const create = async (req, res) => {
    try {

        const {title, text, banner} = req.body;
        if (!title || !banner || !text) {
            res.status(400).send({
                message: "Submit all fields for registration",
            });
        }

        await createService({
            title,
            text,
            banner,
            user: req.userId,
        });

        res.send(201);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

const findAll = async (req, res) => {
    let {limit, offset} = req.query

    limit = Number(limit);
    offset = Number(offset);

    if(!limit){
        limit = 5;
    }
    if(!offset){
        offset = 0;
    }

    const news = await findAllService(offset, limit);
    
    if (news.length === 0) {
        return res.status(400).send({
          message: "There are no registered news"
        });
    };
    res.send(news);
};

export {create, findAll };
