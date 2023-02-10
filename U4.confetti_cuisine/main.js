const express = require("express"),
    app = express(),
    router = express.Router(),
    methodOverride = require("method-override"),
    errorController = require("./controllers/errorController"),
    homeController = require("./controllers/homeController"),
    subscribersController = require("./controllers/subscribersController"),
    usersController = require("./controllers/usersController"),
    layouts = require("express-ejs-layouts"),
    mongoose = require("mongoose");


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

app.set("port", process.env.PORT || 3000);

app.use("/", router);

// set view engine as ejs
// This line is how application knows to expect EJS in views folder in main project directory
app.set("view engine", "ejs");
// let express.js know to use this package as an additional middleware layer
router.use(layouts);
// serving static files
router.use(express.static("public"));

// body-parser
router.use(
    express.urlencoded({
        extended: false
    })
);
router.use(express.json());

// interpret the "POST" request as "PUT"
router.use(methodOverride("_method", {
    methods: ["POST", "GET"]
}));

router.get("/", (req, res) => {
    res.render("index");
  });

// view course listings
router.get("/courses", homeController.showCourses);

router.get("/subscribers", subscribersController.index, subscribersController.indexView);
router.get("/subscribers/new", subscribersController.new);
router.post("/subscribers/create", subscribersController.create, subscribersController.redirectView);
router.get("/subscirbers/:id", subscribersController.show, subscribersController.showView);
router.get("/subscribers/:id/edit", subscribersController.edit);
router.put("/subscribers/:id/update", subscribersController.update, subscribersController.redirectView);
router.delete("/subscribers/:id/delete", subscribersController.delete, subscribersController.redirectView);

router.get("/users", usersController.index, usersController.indexView);
router.get("/users/new", usersController.new);
router.post("/users/create",usersController.create, usersController.redirectView);
router.get("/users/:id", usersController.show, usersController.showView);
router.get("/users/:id/edit", usersController.edit);
router.put("/users/:id/update", usersController.update, usersController.redirectView);
router.delete("/users/:id/delete", usersController.delete, usersController.redirectView);

// handling error
router.use(errorController.pageNotFoundError);
router.use(errorController.internalServerError);


app.listen(app.get("port"),() => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});