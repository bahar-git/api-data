const mongoose = require("mongoose");
const productsData = require("./data");

const productSchema = mongoose.Schema([
  {
    category: {
      type: String,
      required: [true, "Please enter a category"],
    },
    price: {
      type: Number,
      required: [true, "Please enter a price"],
      default: 0,
    },
    strMeal: {
      type: String,
      required: [true, "Please enter a meal name"],
    },
    imgMeal: {
      type: String,
      required: false,
    },
    idMeal: {
      type: String,
      required: true,
    },
  },
]);

const Products = mongoose.model("produc", productSchema);
module.exports = Products;

Products.insertMany(productsData);
