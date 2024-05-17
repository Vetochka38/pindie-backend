const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated } = require("./categories");
const { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated } = require("./games");
const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated } = require("./users");

module.exports = {
    sendAllCategories,
    sendCategoryCreated,
    sendCategoryById,
    sendCategoryUpdated,

    sendAllGames,
    sendGameCreated,
    sendGameById,
    sendGameUpdated,

    sendAllUsers,
    sendUserCreated,
    sendUserById,
    sendUserUpdated
}