const MessagesDao = require("../daos/messagesDao");
const productsModel = require("../models/products.model");
const fakerRandomProducts = require("../utils/mockData");

class MessagesController {
    constructor() {
        this.messagesDao = new MessagesDao();
    }

    getMessages = async (req, res) => {
        const messages = await this.messagesDao.getMessages();
        const products = await productsModel.find().lean();

        console.log("Messages----->", messages);
        console.log("Products----->", products);
        console.log(req.session.passport);

        res.render("index", {
            layout: "app",
            list: {
                products: products,
                messages: messages,
                user: req.session.passport.user,
            },
        });
    };
}

module.exports = MessagesController;
