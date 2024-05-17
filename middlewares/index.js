const { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName } = require("./categories");
const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkIsGameExists } = require("./games");
const { findAllUsers, createUser, findUserById, updateUser, deleteUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists } = require("./users");
const { cors } = require("./cors");

module.exports = {
    findAllCategories,
    createCategory,
    findCategoryById,
    updateCategory,
    deleteCategory,

    checkEmptyName,
    checkIsCategoryExists,

    findAllGames,
    createGame,
    findGameById,
    updateGame,
    deleteGame,

    checkEmptyFields,
    checkIfCategoriesAvaliable,
    checkIfUsersAreSafe,
    checkIsGameExists,

    findAllUsers,
    createUser,
    findUserById,
    updateUser,
    deleteUser,

    checkEmptyNameAndEmailAndPassword,
    checkEmptyNameAndEmail,
    checkIsUserExists,

    cors
}