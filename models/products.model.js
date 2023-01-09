const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: String },
    description: { type: String },
    category: { type: String },
    image: { type: String },
});

module.exports = mongoose.model("Products", ProductsSchema);
