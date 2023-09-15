import express from 'express';
import { register } from './Register.js';
import { login } from './Login.js'; 
import { logout } from './Logout.js';
import { users } from './users.js';



export const api = express.Router();

api.all('/', (req, res) => {
    return res.json({
        msg: 'Incomplete URL',
    });
});

api.use('/register', register);
api.use('/login', login);
api.use('/logout', logout);
api.use('/users', users)

