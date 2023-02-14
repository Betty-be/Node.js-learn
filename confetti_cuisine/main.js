"use strict"

const express = require("express"),
    app = express(),
    router = require("./routes/index"),
    methodOverride = require("method-override"),
    expressSession = require("express-session"),
    cookieParser = require("cookie-parser"),
    connectFlash = require("connect-flash"),
    passport = require("passport"),
    expressValidator = require("express-validator"),
    layouts = require("express-ejs-layouts"),
    mongoose = require("mongoose"),
    User = require("./models/user");


mongoose.set('strictQuery', false);

mongoose.Promise = global.Promise;

// use mongoode to set up the connection to database
mongoose.connect("mongodb://localhost:27017/recipe_db");

const db = mongoose.connection;
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

app.set("port", process.env.PORT || 3000);

app.set("token", process.env.TOKEN || "recipeT0k3n");

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

// interpret the "POST" request as "PUT"
app.use(methodOverride("_method", {
    methods: ["POST", "GET"]
}));

// configure Express.js application to use cookie-parser as middleware
app.use(cookieParser("secret_passcode"));

// configure express-session to use cookie-parser
app.use(expressSession({
    secret: "secret_passcode",
    cookie: {
        maxAge: 4000000
    },
    resave: false,
    saveUninitialized: false
}));

app.use(connectFlash());

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.locals.loggedIn = req.isAuthenticated();
    res.locals.currentUser = req.user;
    next();
});

// configure the user's login strategy
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Assign flash messages to the local flashMessages variable on the response object
app.use((req, res, next) => {
    res.locals.flashMessages = req.flash();
    next();
});

app.use(expressValidator());

app.use("/", router);


app.listen(app.get("port"),() => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});