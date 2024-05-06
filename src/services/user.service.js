import User from "../models/user.js";

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updateService = (id, name, username, email, password, avatar, background) => {
    const update = {};
    if (name !== undefined) update.name = name;
    if (username !== undefined) update.username = username;
    if (email !== undefined) update.email = email;
    if (password !== undefined) update.password = password;
    if (avatar !== undefined) update.avatar = avatar;
    if (background !== undefined) update.background = background;

    return User.findOneAndUpdate({_id: id}, update, {new: true})
        .then(updatedUser => {
            return updatedUser;
        });
}
    
export default {
    createService,
    findAllService,
    findByIdService,
    updateService
}