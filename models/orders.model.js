const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: String },
    description: { type: String },
    category: { type: String },
    image: { type: String },
});

const OrdersSchema = new mongoose.Schema({
    products: { type: [ProductsSchema]  },
    number: { type: String },
    date: { type: String },
    status: { type: String },
    email: { type: String },
});

module.exports = mongoose.model("Orders", OrdersSchema);
