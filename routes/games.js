const { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated } = require('../controllers');
const { findAllGames, createGame, findGameById, updateGame } = require('../middlewares');

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

module.exports = gamesRouter;