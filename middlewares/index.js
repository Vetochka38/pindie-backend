const { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory } = require("./categories");
const { findAllGames, createGame, findGameById, updateGame, deleteGame } = require("./games");
const { findAllUsers, createUser, findUserById, updateUser, deleteUser } = require("./users");
const { cors } = require("./cors");

module.exports = {
    findAllCategories,
    createCategory,
    findCategoryById,
    updateCategory,
    deleteCategory,

    findAllGames,
    createGame,
    findGameById,
    updateGame,
    deleteGame,

    findAllUsers,
    createUser,
    findUserById,
    updateUser,
    deleteUser,

    cors
}