import {createService, findAllService} from "../services/news.services.js"

const create = async (req, res) => {
    try {
        const {title, text, banner} = req.body;

        if(!title || !banner || !text){
            res.status(400).send({
                message: "Submit all fields for registration",
            });
        }

        await createService({
            title,
            text,
            banner,
            user: {_id: "658005b8f4be4055e4fb4a6f"},
        });

        res.send(201);
    } catch (err) {
        res.status(500).send({ message: err.message});
    }
};

const findAll = async (req, res) => {
    const news = await findAllService();
    if (news.length === 0){
        return res.status(400).send({
            message: "There are no registered news",
        });
    }
    res.send(news);
};

export {create, findAll}