//Imports
import express from "express";
import bodyParser from "body-parser";

//Create express server
const app = express();
const port = 5001;

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));

//Map to store blog post information
const blogContent = new Map([
  ["Blog Post 1", "Content of blog post"],
  ["Blog Post 1", "Content of blog post"],
  ["Blog Post 1", "Content of blog post"],
  ["Blog Post 1", "Content of blog post"],
]);

//Routes
//Home page
//Get home page and display blog post information
app.get("/", (req, res) => {
  res.render("homepage.ejs", { blogContent: blogContent });
});

//Blog Post Management
//Get create post page
app.get("/create", (req, res) => {
  res.render("createpost.ejs");
});
//Handle post creation
app.post("/submit", (req, res) => {
  console.log("post added to map");
});
//Modify blog post
app.post("/modify", (req, res) => {
  console.log("post modified in map");
});
//Delete blog post
app.delete("/delete", (req, res) => {
  console.log("post deleted from map");
});

//View Post
app.get("/view", (req, res) => {
  res.render("viewpost.ejs");
});

//Console message
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
