const express = require("express"),
    app = express(),
    errorController = require("./controllers/errorController"),
    homeController = require("./controllers/homeController"),
    subscribersController = require("./controllers/subscribersController"),
    layouts = require("express-ejs-layouts"),
    mongoose = require("mongoose"),
    Subscriber = require("./models/subscriber");


mongoose.set('strictQuery', false);

mongoose.Promise = global.Promise;

// use mongoode to set up the connection to database
mongoose.connect("mongodb://localhost:27017/recipe_db",
{useNewUrlParser: true}
);

db = mongoose.connection;
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});
// Subscriber.create(
//     {
//         name: "Professor sofa",
//         email: "sofafafa@easy.com"
//     },
//     function(error, savedDocument) {
//         if(error) console.log(error);
//         console.log(savedDocument);
//     }
// );
// var myQuery = Subscriber.findOne({
//     name: "Jon Wexler"
// })
//     .where("email", /wexler/);
// myQuery.exec((error, data) => {
//     if (data) console.log(data.name);
// });

app.set("port", process.env.PORT || 3000);

// set view engine as ejs
// This line is how application knows to expect EJS in views folder in main project directory
app.set("view engine", "ejs");
// let express.js know to use this package as an additional middleware layer
app.use(layouts);
// serving static files
app.use(express.static("public"));

// body-parser
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index");
  });

// view course listings
app.get("/courses", homeController.showCourses);
// get contact page
app.get("/contact", subscribersController.getSubscriptionPage);
// handle subscription data
app.post("/subscribe", subscribersController.saveSubscriber);

app.get("/subscribers", subscribersController.getAllSubscribers);


// handling error
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);


app.listen(app.get("port"),() => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});