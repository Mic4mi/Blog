var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

// APP CONFIG.
mongoose.connect("mongodb://localhost/restful_blog_app");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

//SCHEMA - APP MODEL 
var blogSchema = new mongoose.Schema({
    title: String,
    img: String,
    body: String,
    date: { type: Date, default: Date.now }
});
var Blog = mongoose.model("Blog", blogSchema);

//Blog.create({
//    title: "Cat memes",
//    img: "https://i.pinimg.com/originals/9d/e5/b4/9de5b490e93edbc648e82927857c878a.jpg",
//    body: "Cat memes are flooding the internet and... it's awesome!"
// });

// RESTFULL ROUTES 
app.get("/", function (req, res) {
    res.redirect("/blogs");
})
//INDEX ROUTE
app.get("/blogs", function (req, res) {
    Blog.find({}, function (err, blogs) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", { blogs: blogs });
        }
    });
});
// NEW ROUTE
app.get("/blogs/new", function (req, res) {
    res.render("new");
});
// CREATE ROUTE
app.post("/blogs", function (req, res) {
    //crear blog
    Blog.create(req.body.blog, function (err, newBlog) {
        if (err) {
            res.render("new");
        } else {
            //redirect
            res.redirect("/blogs");
        }
    });
});
// SHOW ROUTE
app.get("/blogs/:id", function (req, res) {
    Blog.findById(req.params.id, function (err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.render("show", { blog: foundBlog });
        }
    });
});

app.listen(3000, function () {
    console.log("El servidor de YelpCamp empezó!");
});