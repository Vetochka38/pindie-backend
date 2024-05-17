const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted } = require('../controllers');
const { findAllUsers, createUser, findUserById, updateUser, deleteUser, checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail } = require('../middlewares');

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
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    createUser,
    sendUserCreated
)
usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    updateUser,
    sendUserUpdated
);
usersRouter.delete(
    "/users/:id",
    deleteUser,
    sendUserDeleted
);

module.exports = usersRouter;