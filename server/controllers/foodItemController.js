const FoodItem = require("../models/foodItemModel");

// get all food items from db
const getAllMenu = async (req, res) => {
  try {
    const foodItems = await FoodItem.find();
    res.json(foodItems);
  } catch (error) {
    res.status(500).json({ message: "Error fetching food items" });
  }
};

// add food item to db
const addMenu = async (req, res) => {
  const { name, description, price, category, imageUrl } = req.body;

  if (!name || !price)
    return res.status(400).json({ message: "Name and price are required" });

  try {
    const newFoodItem = new FoodItem({
      name,
      description,
      price,
      category,
      imageUrl,
    });

    await newFoodItem.save();

    res
      .status(201)
      .json({
        message: "Food item added successfully!",
        foodItem: newFoodItem,
      });
  } catch (error) {
    res.status(500).json({ message: "Error adding food items" });
  }
};

// get food item by category
const getByCategory = async (req, res) => {
  try {
    const foodItems = await FoodItem.find({ category: req.params.category });

    if (foodItems.length === 0) {
      res
        .status(404)
        .json({ message: "No food items found for this category" });
    }

    res.status(200).json(foodItems);
  } catch (error) {
    res.status(500).json({ message: "Error fetching food items" });
  }
};

const deleteItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await FoodItem.findById(id)

    if (!deletedItem)
      res.status(404).json({ message: "No food items found of this id" });

   await FoodItem.deleteOne(deletedItem)
    res.status(200).json({ message: "food item deleted successfully", deletedItem });
  } catch (error) {
    res.status(500).json({ message: "Error deleting food items" });
  }
};

module.exports = {
  getAllMenu,
  addMenu,
  getByCategory,
  deleteItemById,
};
