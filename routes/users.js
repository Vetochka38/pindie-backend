const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted } = require('../controllers');
const { findAllUsers, createUser, findUserById, updateUser, deleteUser } = require('../middlewares');

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
usersRouter.delete(
    "/users/:id", 
    deleteUser, 
    sendUserDeleted
);

module.exports = usersRouter;