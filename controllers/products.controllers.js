const productsModel = require("../models/products.model");

class ProductsController {
    getProducts = async (req, res) => {
        try {
            const products = productsModel.find();
            res.status(200).json({
                products,
            });
        } catch (e) {
            res.status(500).json({
                success: false,
                message: e,
            });
        }
    };

    saveProduct = async (req, res) => {
        try {
            const { name, price, description, category, image } = req.body;
            const newProduct = { name, price, description, category, image }

            new productsModel(newProduct).save();
            res.status(200).json({
                success: true,
                message: "Product added successfully"
            })
        } catch (e) {
            res.status(500).json({
                success: false,
                message: e,
            });
        }
    }
}

module.exports = ProductsController;
