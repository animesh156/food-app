const mongoose = require('mongoose')

const foodItemSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String },
  imageUrl: { type: String },
    }
);

module.exports = mongoose.model('FoodItem', foodItemSchema)