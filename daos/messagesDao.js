const Messages = require("../models/messages.model");
const { connectDB } = require("../utils/helpers");

class MessagesDao{
    constructor() {
        connectDB();
    }

    async getMessages() {
        try {
            const messages = await Messages.find().lean();

            const msg = messages.map(mess => {
                return {...mess, author: mess.author[0].name}
            })
            return msg;
        } catch (error) {
            return error
        }
    }

    async saveMessage(msg) {
        try {
            new Messages(msg).save();
            return;
        } catch (error) {
            return error;
        }
    }
}

module.exports = MessagesDao;
