const Cart = require("../models/Cart.model");
const Category = require("../models/Category.model");
const User = require("../models/User.model");
const Pill = require("../models/Pill.model");

module.exports.categoryController = {
  postCat: async (req, res) => {
    try {
      const cat = await Category.create({
        name: req.body.name,
        description: req.body.description,
      });
      res.json(cat);
    } catch (err) {
      res.json("Issues when creating category");
    }
  },
  getAllCat: async (req, res) => {
    try {
      const allCat = await Category.find();
      res.json(allCat);
    } catch (err) {
      res.json("Issue when getting all categories");
    }
  },

  getCatsById: async (req, res) => {
    try {
      const oneCat = await Category.findById(req.params.id);
      res.json(oneCat);
    } catch (err) {
      res.json("Issue when getting category by id");
    }
  },
  patchCat: async (req, res) => {
    try {
      await Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
      });
      res.json("Category has been changed");
    } catch (err) {
      res.json("Issues when changing category");
    }
  },
  deleteCatById: async (req, res) => {
    try {
      await Category.findByIdAndRemove(req.params.id);
      res.json("Category removed");
    } catch (err) {
      res.json("Issues when deleting category");
    }
  },
};
