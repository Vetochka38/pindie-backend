const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted } = require('../controllers');
const { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName } = require('../middlewares');

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
    checkIsCategoryExists,
    checkEmptyName,
    createCategory,
    sendCategoryCreated
)
categoriesRouter.put(
    "/categories/:id",
    checkEmptyName,
    updateCategory,
    sendCategoryUpdated
);
categoriesRouter.delete(
    "/categories/:id",
    deleteCategory,
    sendCategoryDeleted
);

module.exports = categoriesRouter;
