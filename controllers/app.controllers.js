const MessagesDao = require("../daos/messagesDao.js");
const productsModel = require("../models/products.model");

class AppController {
    constructor() {
        this.messagesDao = new MessagesDao();
    }

    renderServerInfo = (req, res) => {
        res.render("index", {
            layout: "info",
            list: {
                os: process.platform,
                nodeVersion: process.version,
                rrs: process.memoryUsage().rss,
                path: process.cwd(),
                processId: process.pid,
            },
        });
    };

    renderProducts = async (req, res) => {
        const products = await productsModel.find().lean();

        res.render("index", {
            layout: "app",
            list: {
                products: products,
                user: req.session.passport.user,
            },
        });
    };

    renderMessagges = async (req, res) => {
        const messages = await this.messagesDao.getMessages();

        res.render("index", {
            layout: "chat",
            list: {
                messages: messages,
                user: req.session.passport.user,
            },
        });
    };
}

module.exports = AppController;
