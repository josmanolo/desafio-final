const { connectDB } = require("../utils/helpers");
const Users = require("../models/users.model");
const usersModel = require("../models/users.model");

class UsersDao {
    constructor() {
        connectDB();
    }

    getUser = async (usern) => {
        try{
            const user = await usersModel.find({ username: usern });
            return user;
        } catch(err) {
            console.error(err)
        }
    }

    saveUser = async (newUser) => {
        new Users(newUser).save();
    }

}

module.exports = UsersDao;