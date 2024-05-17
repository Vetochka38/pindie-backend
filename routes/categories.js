const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated } = require('../controllers');
const { findAllCategories, createCategory, findCategoryById, updateCategory } = require('../middlewares');

const categoriesRouter = require('express').Router();

categoriesRouter.get(
    '/categories',
    findAllCategories,
    sendAllCategories
)
categoriesRouter.get(
    '/categories/:id',
    findCategoryById,
    sendCategoryById
)
categoriesRouter.post(
    '/categories',
    findAllCategories,
    createCategory,
    sendCategoryCreated
)

categoriesRouter.put(
    "/categories/:id", 
    updateCategory,
    sendCategoryUpdated
  );

module.exports = categoriesRouter;
