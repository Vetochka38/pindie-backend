const { sendAllGames, sendGameCreated } = require('../controllers');
const { findAllGames, createGame } = require('../middlewares');

const gamesRouter = require('express').Router();

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);

module.exports = gamesRouter;