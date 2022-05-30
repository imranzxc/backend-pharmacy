const mongoose = require("mongoose");
const cartSсhema = mongoose.Schema({
  user: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
    default: null,
  },
  products: [
    {
      ref: "Pill",
      type: mongoose.SchemaTypes.ObjectId,
    },
  ],
  sum: {
    type: Number,
    default: 0,
  },
});

const Cart = mongoose.model("Cart", cartSсhema);
module.exports = Cart;
