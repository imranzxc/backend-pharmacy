const { findById } = require("../models/Cart.model");
const Cart = require("../models/Cart.model");
const Category = require("../models/Category.model");
const User = require("../models/User.model");
const Pill = require("../models/Pill.model");

module.exports.cartController = {
  // Cart creating

  postCart: async (req, res) => {
    try {
      await Cart.create({
        user: req.body.userId,
      });
      res.json("Cart is succesfully created");
    } catch (err) {
      res.json("Issue when creating cart");
    }
  },

  // adding pill to shopping cart
  addPill: async (req, res) => {
    try {
      const pill = await Pill.findById(req.body.products);
      const cart = await Cart.findById(req.params.id);
      const user = await User.findById(req.params.userId);

      if (cart.user == req.params.userId) {
        if (pill.recipe && !user.hasRecipe) {
          return res.json("Sorry! You dont have recipe for this pill");
        }
        await Cart.findByIdAndUpdate(req.params.id, {
          $push: { products: req.body.products },
          $set: { sum: cart.sum + pill.price },
        });
        res.json("Pill has been added in your product cart");
      } else {
        return res.json("You dont have product cart");
      }
    } catch (err) {
      res.json(err);
    }
  },

  // returning pill from the product cart

  returnPill: async (req, res) => {
    try {
      const pill = await Pill.findById(req.body.products);
      const cart = await Cart.findById(req.params.id);

      if (cart.products.includes(req.body.products)) {
        await Cart.findByIdAndUpdate(cart, {
          $pull: { products: req.body.products },
          sum: cart.sum - pill.price,
        });
        return res.json("Pill was removed from cart");
      } else {
        res.json("issue when removing pill");
      }
    } catch (err) {
      res.json(err);
    }
  },

  //removing all products from cart

  clearCart: async (req, res) => {
    try {
      await Cart.findByIdAndUpdate(req.params.id, {
        products: [],
        sum: null,
      });
      res.json("Cart is clear");
    } catch (err) {
      res.json(err);
    }
  },

  // buying pill
  buyPill: async (req, res) => {
    try {
      const cart = await Cart.findById(req.params.id);
      const user = await User.findById(req.params.userId);

      if (cart.sum > user.cash) {
        return res.json(
          "You dont have enough money to buy pills in your product cart"
        );
      }
      await User.findByIdAndUpdate(cart.user, {
        cash: user.cash - cart.sum,
      });
      await Cart.findByIdAndUpdate(req.params.id, {
        products: [],
        sum: null,
      });
      res.json("Payment accepted");
    } catch (err) {
      res.json(err);
    }
  },

  //adding money to cash
  cashRefill: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      await User.findByIdAndUpdate(req.params.userId, {
        cash: user.cash + req.body.cash,
      });
      res.json("Cash has been refilled");
    } catch (err) {
      res.json(err);
    }
  },
};
