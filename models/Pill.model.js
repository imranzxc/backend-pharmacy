const mongoose = require('mongoose')
const pillSсhema = mongoose.Schema({
  name: String,
  price: Number,
  category: {
    ref: 'Category',
    type: mongoose.SchemaTypes.ObjectId
  },
  recipe: {
    type: Boolean,
    default: false
  }
})

const Pill = mongoose.model("Pill", pillSсhema)
module.exports = Pill