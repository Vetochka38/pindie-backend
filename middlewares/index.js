const { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName } = require("./categories");
const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkIsGameExists } = require("./games");
const { findAllUsers, createUser, findUserById, updateUser, deleteUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists, hashPassword } = require("./users");
const { cors } = require("./cors");
const { checkAuth, checkCookiesJWT } = require("./auth");

module.exports = {
    cors,
    checkAuth,
    checkCookiesJWT,

    // ./categories
    findAllCategories,
    createCategory,
    findCategoryById,
    updateCategory,
    deleteCategory,

    checkEmptyName,
    checkIsCategoryExists,

    // ./games
    findAllGames,
    createGame,
    findGameById,
    updateGame,
    deleteGame,

    checkEmptyFields,
    checkIfCategoriesAvaliable,
    checkIfUsersAreSafe,
    checkIsGameExists,

    // ./users
    findAllUsers,
    createUser,
    findUserById,
    updateUser,
    deleteUser,

    checkEmptyNameAndEmailAndPassword,
    checkEmptyNameAndEmail,
    checkIsUserExists,

    hashPassword,
}