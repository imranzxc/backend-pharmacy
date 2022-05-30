const mongoose = require('mongoose')
const userSсhema = mongoose.Schema({
  name: String,
  cash: Number,
  hasRecipe: {
    type: Boolean,
    default: false
  }
})

const User = mongoose.model("User", userSсhema)
module.exports = User