import User from '../models/user.js'
import jwt from 'jsonwebtoken'

const loginService = (email) =>  User.findOne({email: email}).select("+password");

const generateToken = (user) => {
    return jwt.sign({ id: user._id, username: user.username }, process.env.SECRET_JWT, { expiresIn: '24h' });
  };

export {loginService, generateToken};