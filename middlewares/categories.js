const categories = require('../models/category');

const findAllCategories = async (req, res, next) => {
    req.categoriesArray = await categories.find({});
    next();
}

const createCategory = async (req, res, next) => {
    console.log("POST /categories");
    try {
        console.log(req.body);
        req.category = await categories.create(req.body);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Error creating category" }));
    }
};

const findCategoryById = async (req, res, next) => {
    try {
      req.category = await categories.findById(req.params.id);
      next();
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
      res.status(404).send(JSON.stringify({ message: "Category not found" }));
    }
  };

module.exports = {
    findAllCategories,
    createCategory,
    findCategoryById
}; 