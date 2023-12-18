const userService = require("../services/user.service")
const mongoose = require("mongoose");

const create = async (req, res) => {
    const {name, username, email, password, avatar, background} = req.body;

    if (!name || !username || !email || !password || !avatar || !background){
        res.status(400).send({message: "Submit all fields for registration"})
    }

    const user = await userService.createService(req.body);

    if (!user){
        return res.status(400).send({message: "Error creating User"});
    }
    //Como eu uso javascripit eu posso evitar name : name pois ambos tem o mesmo nome
    res.status(201).send({
        message: "User created successfully",
        user: {
            id: user._id,
            name, 
            username,
            email,//Estou ignorando o password aqui por razões obvias
            avatar,
            background,
        },
    });
};

const findAll = async (req, res) => {
    const users = await userService.findAllService();

    if(users.lenght === 0) {
        return res.status(400).send({message: "There are no registered users"});
    }

    res.send(users)
}

const findById = async (req, res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({ message: "Invaid ID"});
    }

    const user = await userService.findByIdService(id);

    if(!user){
        return res.status(400).send({message: "User not found"})   
    }

    res.send(user);
}

module.exports = {create, findAll, findById};