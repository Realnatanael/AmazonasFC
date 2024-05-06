import userService from "../services/user.service.js";

const create = async (req, res) => {
    try{
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
    } catch (err) {
        res.status(500).send({message: err.message})
    }
};

const findAll = async (req, res) => {
    try{
        const users = await userService.findAllService();

        if(users.lenght === 0) {
            return res.status(400).send({message: "There are no registered users"});
        }

        res.send(users);
    } catch (err) {
        res.status(500).send({message: err.message})
    }
};

const findById = async (req, res) => {
    try{
        const user = req.user;
        res.send(user);
    } catch (err) {
        res.status(500).send({message: err.message})
    }
};

const update = async (req, res) => {
    try{
        const {name, username, email, password, avatar, background} = req.body;

        if (!name && !username && !email && !password && !avatar && !background){
            res.status(400).send({message: "Submit at least one field for update"})
        }

        const {id, user} = req;

        const updatedUser = await userService.updateService(
            id,
            name, 
            username, 
            email, 
            password, 
            avatar, 
            background  
        );

        if (!updatedUser) {
            return res.status(500).send({message: "Failed to update user"});
        }

        res.send({message: "User successfully updated!"});
    } catch (err) {
        res.status(500).send({message: err.message})
    }
};

export default {create, findAll, findById, update};