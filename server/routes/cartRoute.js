const express = require("express");
const router = express.Router();
const {addCart, updateCart, deleteCartItem, getCart, deleteUserCart} = require('../controllers/cartController')

router.get("/:userId", getCart);
router.post("/", addCart);
router.put("/", updateCart);
router.delete("/:userId/:foodItemId", deleteCartItem);
router.delete("/:userId", deleteUserCart)


module.exports = router;
