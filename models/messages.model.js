const mongoose = require("mongoose");

const MessagesSchema = new mongoose.Schema({
    email: { type: String },
    date: { type: String },
    type: { type: String },
    text: { type: String }
});

module.exports = mongoose.model("Messages", MessagesSchema);
