const create = (req, res) => {
    const {name, username, email, password, avatar, background} = req.body;

    if (!name || !username || !email || !password || !avatar || !background){
        res.status(400).send({message: "Submit all fields for registration"})
    }

    
    //Como eu uso javascripit eu posso evitar name : name pois ambos tem o mesmo nome
    res.status(201).send({
        message: "User created successfully",
        user: {
            name, 
            username,
            email,//Estou ignorando o password aqui por razões obvias
            avatar,
            background,
        },
    });
};

module.exports = {create};