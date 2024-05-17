const { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted } = require('../controllers');
const { findAllGames, createGame, findGameById, updateGame, deleteGame } = require('../middlewares');

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
    createGame,
    sendGameCreated
);
gamesRouter.put(
    '/games/:id',
    findGameById,
    updateGame,
    sendGameUpdated
)
gamesRouter.delete(
    "/games/:id",
    deleteGame,
    sendGameDeleted
)

module.exports = gamesRouter;