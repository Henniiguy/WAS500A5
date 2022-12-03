const { MONGO_DB_STRING } = require("./constants");
const mongoose = require("mongoose");
const { BookModel } = require("./models");

const connect = async (callback) => {
    await mongoose.connect(MONGO_DB_STRING);
    callback();
};

const DBHandler = {
    getAllBooks: async (callback) => {
        await connect(async () => {
            try {
                const res = await BookModel.find();
                callback(res);
            } catch (e) {
                console.log(e);
                callback(null, e);
            }
        });
    },
    getBookByID: async (bookid, callback) => {
        await connect(async () => {
            try {
                const res = await BookModel.findById(bookid);
                callback(res);
            } catch (e) {
                console.log(e);
                callback(null, e);
            }
        });
    },
    // this function will add new books
    createNewBook: async (name, author, desc, image, callback) => {
        await connect(async () => {
            try {
                const newBook = new BookModel({
                    name: name,
                    author: author,
                    desc: desc,
                    image: image,
                });
                await newBook.save();
                callback(true);
            } catch (e) {
                console.log(e);
                callback(null, e);
            }
        });
    },
};

module.exports = { DBHandler };
