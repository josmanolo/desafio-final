const Messages = require("../models/messages.model");
const { connectDB } = require("../utils/helpers");

class MessagesDao{
    constructor() {
        connectDB();
    }

    async getMessages() {
        try {
            const messages = await Messages.find().lean();
            return messages;
        } catch (error) {
            return error
        }
    }

    async getMessagesByUser(email) {
        try {
            const messages = await Messages.find({email: email}).lean();
            return messages;
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
