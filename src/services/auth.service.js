import User from '../models/User.js'
import jwt from 'jsonwebtoken';

const loginService = (email) => 
    User.findOne({email: email}).select("+password");

const generateToken = () => jwt.sign({id: id}, "qualquercoisa");


export {loginService}