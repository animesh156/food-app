const express = require("express");
const router = express.Router();
const {addCart, updateCart, deleteCart, getCart} = require('../controllers/cartController')

router.get("/:userId", getCart);
router.post("/", addCart);
router.put("/", updateCart);
router.delete("/", deleteCart);

module.exports = router;
