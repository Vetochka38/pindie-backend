const { sendAllCategories, sendCategoryCreated } = require('../controllers');
const { findAllCategories, createCategory } = require('../middlewares');

const categoriesRouter = require('express').Router();

categoriesRouter.get('/categories', findAllCategories, sendAllCategories)
categoriesRouter.post('/categories', findAllCategories, createCategory, sendCategoryCreated)

module.exports = categoriesRouter;
