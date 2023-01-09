const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: String },
    description: { type: String },
    category: { type: String },
    image: { type: String },
    quantity: { type: Number },
});

const CartsSchema = new mongoose.Schema({
    email: { type: String },
    products: { type: [ProductsSchema] },
    date: { type: String },
    address: { type: String },
});

module.exports = mongoose.model("Carts", CartsSchema);
