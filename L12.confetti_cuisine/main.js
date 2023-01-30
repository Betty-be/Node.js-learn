// Require express.
const express = require("express"),
    app = express(),
    homeController = require("./controllers/homeController"),
    layouts = require("express-ejs-layouts"),
    errorController = require("./controllers/errorController");

// set port
app.set("port", process.env.PORT || 3000);

// set the application to use ejs.
app.set("view engine", "ejs");
// set the application to use the layout module
app.use(layouts);
// serving static views
app.use(express.static("public"));

// tell the Express.js app to use body-parser for processing URL-encoded and JSON parameters.
app.use(
    express.urlencoded({
        extended: false
    })
);

// create a route for the home page
app.get("/", (req, res) => {
    res.send("index");
});

// adding routes for each page and request type
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

// error handing routes
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

// listen on port
app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});