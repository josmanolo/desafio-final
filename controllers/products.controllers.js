const productsModel = require("../models/products.model");

class ProductsController {
  getProducts = async (req, res) => {
    try {
      const products = await productsModel.find();
      res.status(200).json({
        products,
      });
    } catch (e) {
      //console.log(e);
      res.status(500).json({
        success: false,
        message: e,
      });
    }
  };

  getProductsByCategory = async (req, res) => {
    try {
      const { category } = req.params;
      const products = await productsModel.find({ category: category });
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

  getProductsById = async (req, res) => {
    try {
      const { id } = req.params;
      //console.log(id)
      const products = await productsModel.find({ _id: id });
      if (id) {
        res.status(200).json({
          products,
        });
      } else {
        res.status(200).json({
          message: "The product doesn't exist",
        });
      }
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
      const newProduct = { name, price, description, category, image };

      new productsModel(newProduct).save();
      res.status(200).json({
        success: true,
        message: "Product added successfully",
      });
    } catch (e) {
      res.status(500).json({
        success: false,
        message: e,
      });
    }
  };

  deleteProductById = async (req, res) => {
    try {
      const { id } = req.params;

      const deletedProduct = await productsModel.findByIdAndRemove({ _id: id });
      if (deletedProduct) {
        res.status(200).json({
          message: "Product deleted sucessfully",
        });
      } else {
        res.status(200).json({
          message: "The product doesn't exist",
        });
      }
    } catch (e) {
      res.status(500).json({
        success: false,
        message: e,
      });
    }
  };

  updateProductById = async (req, res) => {
    try {
      const { id, productData } = req.params;
      const updatedProduct = await this.productsModel.findByIdAndUpdate(
        { _id: id },
        productData
      );
      if (updatedProduct) {
        res.status(200).json({
          message: "Product updated sucessfully",
        });
      } else {
        res.status(200).json({
          message: "The product doesn't exist",
        });
      }
    } catch (e) {
      res.status(500).json({
        success: false,
        message: e,
      });
    }
  };
}

module.exports = ProductsController;
