const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        author: { type: String, required: true },
        desc: { type: String, required: true },
        image: { type: String, required: true },
    },
    { collection: "books" }
);

const BookModel = mongoose.model("Book", BookSchema);
module.exports = { BookModel };
