const express = require("express");
const app = express();
const port = 3000;
const { DBHandler } = require("./DBHandler");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/home", (req, res) => {
    res.render("index");
});
app.get("/", (req, res) => {
    res.redirect("/home");
});
app.get("/booksList", (req, res) => {
    DBHandler.getAllBooks((res1, err) => {
        res.render("books", { books: res1 });
    });
});
app.get("/book/:bookID", (req, res) => {
    DBHandler.getBookByID(req.params.bookID, (res1, err) => {
        res.render("book_detail", { book: res1 });
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

