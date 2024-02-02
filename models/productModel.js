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

// Products.insertMany(productsData);

const insertProductsData = async () => {
  try {
    const existingData = await Products.findOne({});
    if (!existingData) {
      await Products.insertMany(productsData);
      console.log("Data inserted successfully.");
    } else {
      console.log("Data already exists.");
    }
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};
insertProductsData();

module.exports = Products;
