const mongoose = require('mongoose')

const cartSchema = mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        items: [
            {
              foodItem: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem', required: true },
              quantity: { type: Number, required: true },
            },
          ],
    }, { timestamps: true }
)

module.exports = mongoose.model("Cart", cartSchema);