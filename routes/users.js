const { sendAllUsers, sendUserCreated, sendUserById } = require('../controllers');
const { findAllUsers, createUser, findUserById } = require('../middlewares');

const usersRouter = require('express').Router();

usersRouter.get(
    '/users',
    findAllUsers,
    sendAllUsers
);
usersRouter.get(
    '/users/:id',
    findUserById,
    sendUserById
)
usersRouter.post(
    '/users',
    findAllUsers,
    createUser,
    sendUserCreated
)
usersRouter.put(
    "/users/:id",
    updateUser,
    sendUserUpdated
);

module.exports = usersRouter;