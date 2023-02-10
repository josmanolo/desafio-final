const cartsModel = require("../models/carts.model.js");
const productsModel = require("../models/products.model");

class CartsController {
  getCart = async (req, res) => {
    try {
      const { id } = req.body;
      const cart = cartsModel.find({ id });
      res.status(200).json({
        cart,
      });
    } catch (e) {
      res.status(500).json({
        success: false,
        message: e,
      });
    }
  };

  saveCart = async (req, res) => {
    try {
      const { email, products, address, date } = req.body;
      const newCart = { email, products, address, date };

      new cartsModel(newCart).save();
      res.status(200).json({
        success: true,
        message: "Cart created successfully",
      });
    } catch (e) {
      res.status(500).json({
        success: false,
        message: e,
      });
    }
  };

  deleteCartById = async (req, res) => {
    try {
      const { id } = req.body;

      const deletedCart = await cartsModel.findByIdAndRemove({ _id: id });

      if (deletedCart) {
        res.status(200).json({
          success: true,
          message: "Cart deleted successfully",
        });
      } else {
        res.status(200).json({
          message: "The cart doesn't exist",
        });
      }
    } catch (e) {
      res.status(500).json({
        success: false,
        message: e,
      });
    }
  };

  addProductToCart = async (req, res) => {
    try {
      const { cartId, productId, quantity } = req.body;

      let cart = await this.getCart(cartId);
      !cart &&
        res.status(200).json({
          message: "The cart doesn't exist",
        });

      const products = await productsModel.find({ _id: productId });
      !products &&
        res.status(200).json({
          message: "The product doesn't exist",
        });

      const { id, category, name, description, image, price } = products;

      cart.products.push({
        _id: mongoose.Types.ObjectId(id),
        name,
        description,
        image,
        price,
        quantity,
        category,
      });

      await cartsModel.findByIdAndUpdate({ _id: cartId }, cart, {
        new: true,
      });

      res.status(200).json({
        message: "The product was added to the cart",
      });
    } catch (e) {
      res.status(500).json({
        success: false,
        message: e,
      });
    }
  };

  updateProductInCart = async (req, res) => {
    try {
      const { cartId, productId } = req.body;

      let cart = await this.getCart(cartId);
      !cart &&
        res.status(200).json({
          message: "The cart doesn't exist",
        });

      let product = cart.products.find(
        (product) =>
          product._id.toString() ===
          mongoose.Types.ObjectId(productId).toString()
      );

      if (product) {
        cartsModel.updateOne(
          { _id: product._id },
          { $set: { quantity: quantity + 1 } }
        );
      } else {
        res.status(200).json({
          message: "The product doesn't exist",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: e,
      });
    }
  };
}

module.exports = CartsController;
