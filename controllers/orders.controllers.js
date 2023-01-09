const ordersModel = require("../models/orders.model");
const { getCurrentDate, sendMail } = require("../utils/helpers");

class OrdersController {
    getOrder = async (req, res) => {
        try {
            const { email } = req.body;
            const orders = ordersModel.find({ email });
            res.status(200).json({
                orders,
            });
        } catch (e) {
            res.status(500).json({
                success: false,
                message: e,
            });
        }
    };

    saveOrder = async (req, res) => {
        try {
            const { products, status } = req.body;
            const orders = ordersModel.find();

            const newOrder = {
                products,
                status,
                email,
                date: getCurrentDate(),
                number: orders.length + 1,
            };

            new ordersModel(newOrder).save();
            sendMail("order", newOrder);
            res.status(200).json({
                success: true,
                message: "Order created successfully",
            });
        } catch (e) {
            res.status(500).json({
                success: false,
                message: e,
            });
        }
    };
}

module.exports = OrdersController;
