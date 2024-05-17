const { findAllCategories, createCategory, findCategoryById, updateCategory } = require("./categories");
const { findAllGames, createGame, findGameById, updateGame } = require("./games");
const { findAllUsers, createUser, findUserById, updateUser } = require("./users");
const { cors } = require("./cors");

module.exports = {
    findAllCategories,
    createCategory,
    findCategoryById,
    updateCategory,

    findAllGames,
    createGame,
    findGameById,
    updateGame,

    findAllUsers,
    createUser,
    findUserById,
    updateUser,

    cors
}