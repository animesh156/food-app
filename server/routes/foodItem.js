const express = require('express')
const router = express.Router()
const {getAllMenu,addMenu,getByCategory,deleteItemById} = require('../controllers/foodItemController')


router.get('/', getAllMenu)
router.post('/',addMenu)
router.get('/:category',getByCategory)
router.delete('/:id',deleteItemById)

module.exports = router