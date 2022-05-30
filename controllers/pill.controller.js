const Cart = require("../models/Cart.model");
const Category = require("../models/Category.model");
const User = require("../models/User.model");
const Pill = require("../models/Pill.model");

module.exports.pillsController = {
  postPill: async (req, res) => {
    try {
      await Pill.create({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        recipe: req.body.recipe,
      });
      res.json("Category has been added");
    } catch (err) {
      res.json("Issues when creating category");
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

  patchPill: async (req, res) => {
    try {
      await Pill.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        recipe: req.body.recipe,
      });
      res.json("Pill has been changed");
    } catch (err) {
      res.json("Issues when changing pill");
    }
  },
  deletePillById: async (req, res) => {
    try {
      await Pill.findByIdAndRemove(req.params.id);
      res.json("Pill has been removed");
    } catch (err) {
      res.json("Issues when removing pill");
    }
  },
};
