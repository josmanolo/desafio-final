const cartsModel = require("../models/carts.model.js");

class CartsController {
    getCart = async (req, res) => {
        try {
            const { email } = req.body;
            const cart = cartsModel.find({ email });
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
}

module.exports = CartsController;
