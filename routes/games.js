const { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted } = require('../controllers');
const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsGameExists, checkAuth } = require('../middlewares');

const gamesRouter = require('express').Router();

gamesRouter.get(
    '/games',
    findAllGames,
    sendAllGames
);
gamesRouter.get(
    '/games/:id',
    findGameById,
    sendGameById
)
gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    createGame,
    sendGameCreated
);
gamesRouter.put(
    '/games/:id',
    findGameById,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    updateGame,
    sendGameUpdated
)
gamesRouter.delete(
    "/games/:id",
    checkAuth,  
    deleteGame,
    sendGameDeleted
)

module.exports = gamesRouter;