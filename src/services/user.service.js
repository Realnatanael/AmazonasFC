import User from "../models/user.js";

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updateService = (
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
) => //lembrando que é uma função de callback se eu querer usar {} vou ter que dar um return
    User.findOneAndUpdate(
        {_id: id},
        {name, username, email, password, avatar, background}
    )
    
export default {
    createService,
    findAllService,
    findByIdService,
    updateService
}