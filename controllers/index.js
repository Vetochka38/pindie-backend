const { sendAllCategories, sendCategoryCreated } = require("./categories");
const { sendAllGames, sendGameCreated } = require("./games");
const { sendAllUsers, sendUserCreated } = require("./users");

module.exports = {
    sendAllCategories, 
    sendCategoryCreated,
    sendAllGames, 
    sendGameCreated,
    sendAllUsers,
    sendUserCreated
}