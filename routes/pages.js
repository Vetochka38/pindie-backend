const { sendIndex, sendDashboard } = require("../controllers");
const { checkCookiesJWT, checkAuth } = require("../middlewares");

const pagesRouter = require("express").Router();

pagesRouter.get("/", sendIndex);
pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard);

module.exports = pagesRouter