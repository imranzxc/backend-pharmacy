const Cart = require("../models/Cart.model");
const Category = require("../models/Category.model");
const User = require("../models/User.model");
const Pill = require("../models/Pill.model");

module.exports.userController = {
  postUser: async (req, res) => {
    try {
      await User.create({
        name: req.body.name,
        cash: req.body.cash,
        hasRecipe: req.body.hasRecipe,
      });
      res.json("User has been added");
    } catch (err) {
      res.json("Issues when creating user");
    }
  },

  getAllPills: async (req, res) => {
    try {
      const allPills = await Pill.find({}).populate("recipe category");
      res.json(allPills);
    } catch (err) {
      res.json("Issue when getting all pills");
    }
  },

  getPillsById: async (req, res) => {
    try {
      const onePill = await Pill.findById(req.params.id).populate(
        "recipe category"
      );
      res.json(onePill);
    } catch (err) {
      res.json("Issue when getting pills by id");
    }
  },

  getPillsByCat: async (req, res) => {
    try {
      const pillsCat = await Pill.find({ category: req.params.id }).populate(
        "category"
      );
      res.json(pillsCat);
    } catch (err) {
      res.json("Issue when getting pills by category");
    }
  },
};
