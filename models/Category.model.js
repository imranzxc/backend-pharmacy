const mongoose = require('mongoose')
const categorySсhema = mongoose.Schema({
name: String,
description: String
})

const Category = mongoose.model("Category", categorySсhema)
module.exports = Category