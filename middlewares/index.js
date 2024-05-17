const { findAllCategories, createCategory, findCategoryById } = require("./categories");
const { findAllGames, createGame, findGameById } = require("./games");
const { findAllUsers, createUser, findUserById } = require("./users");
const { cors } = require("./cors");

module.exports = {
    findAllCategories,
    createCategory,
    findCategoryById,
    findAllGames,
    createGame,
    findGameById,
    findAllUsers,
    createUser,
    findUserById,
    cors
}