// Require express.
const express = require("express"),
    app = express(),
    homeController = require("./controllers/homeController"),
    layouts = require("express-ejs-layouts"),
    errorController = require("./controllers/errorController"),
    mongoose = require("mongoose"),
    Subscriber = require("./models/subscriber"),
    subscribersController = require("./controllers/subscribersController");

mongoose.Promise = global.Promise


const { db } = require("./models/subscriber")
// set up the database connection
mongoose.connect(
    "mongodb://localhost:27017/confetti_cuisine",
    {useNewUrlParser: true}
);

db.once("open", () => {
    console.log("Successfully connecyed to MongoDB using Mongoose!");
});

app.get("/subscribers", subscribersController.getAllSubscribers, (req, res, next) => {
    console.log(req.data);
    res.send(req.data);
});


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

// add a route to view all subscribers.
app.get("/subscribers", subscribersController.getAllSubscribers);

// add a route to view the contact page.
app.get("/contact", subscribersController.getSubscriptionPage);

// add a route to handle posted form data.
app.post("/subscribe", subscribersController.saveSubcriber);


// error handing routes
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

// listen on port
app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});