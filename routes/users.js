const { sendAllUsers, sendUserCreated } = require('../controllers');
const { findAllUsers, createUser } = require('../middlewares');

const usersRouter = require('express').Router();

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post('/users', findAllUsers, createUser, sendUserCreated)

module.exports = usersRouter;