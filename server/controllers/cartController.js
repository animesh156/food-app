const asyncHandler = require("express-async-handler");
const Cart = require("../models/cartModel");

const addCart = asyncHandler(async (req, res) => {
  const { userId, foodItemId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId });
    if (cart) {
      const itemIndex = cart.items.findIndex(
        (item) => item.foodItem.equals(foodItemId)
      );
      if (itemIndex > -1) cart.items[itemIndex].quantity += quantity;
      else cart.items.push({ foodItem: foodItemId, quantity });
    } else {
      cart = new Cart({
        userId,
        items: [{ foodItem: foodItemId, quantity }],
      });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Server Error" });
  }
});

const getCart = asyncHandler(
    async (req,res) => {
        const {userId} = req.params

        try {
            const cart = await Cart.findOne({userId}).populate('items.foodItem'); 
            if (!cart) {
                return res.status(404).json({ message: 'Cart not found' });
              }
           
            res.status(200).json(cart)
        } catch (error) {
            res.status(500).json({ message: 'Error fetching cart data' });
        }
    }
)


const updateCart = asyncHandler(
    async (req,res) => {
        const {userId, foodItemId, quantity} = req.body;
          
        try {
            let cart = await Cart.findOne({userId})
              

            if(cart) {
                const itemIndex = cart.items.findIndex(
                    (item) => item.foodItem.equals(foodItemId)
                  );

                  const test = await Cart.findOne({ userId })
                //  console.log(test.items[0].foodItem.name)
                // //  console.log(test.items)

                //  test.items.map((item) => console.log(item.foodItem.name))
                
                if(itemIndex > -1) cart.items[itemIndex].quantity = quantity

                await cart.save()
                res.status(200).json(cart)
            } else {
                res.status(404).json({message: 'Cart not found'})
            }

        } catch (error) {
            res.status(500).json({ message: 'Error updating cart data' });
        }
    }
)


const deleteCartItem = asyncHandler(
    async (req,res) => {
    const {userId, foodItemId} = req.params;
 
    try {
        let cart = await Cart.findOne({userId})
           console.log(cart)
        if(cart){
            cart.items = cart.items.filter((item) => item.foodItem.toString() !== foodItemId)
            await cart.save()
            res.status(200).json(cart)
        } else res.status(404).json({message: 'Cart not found'})
        
    } catch (error) {
        res.status(500).json({ message: 'Error deleting cart ' });
    }
    }
)

const deleteUserCart = asyncHandler(
  async (req,res) => {
    try {
      const {userId} = req.params
      await Cart.deleteMany({userId})
      res.status(200).json({msg: "cart cleared successfully"})
    } catch (error) {
      console.log(error)
      res.status(500).json({msg: "Error while fetching cart data"})
    }
  }
)



module.exports = {
    addCart,
    updateCart,
    deleteCartItem,
    getCart,
    deleteUserCart
}