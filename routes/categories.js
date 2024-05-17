const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted } = require('../controllers');
const { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory } = require('../middlewares');

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
categoriesRouter.delete(
    "/categories/:id",
    deleteCategory,
    sendCategoryDeleted
);

module.exports = categoriesRouter;
