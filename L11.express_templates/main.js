const  
    homeController = require("./controllers/homeController"),
    layouts = require("express-ejs-layouts"),
    express = require("express"),
    app = express(),
    errorController = require("./controllers/errorController");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs")
app.use(layouts);
app.get("/name/:myName", homeController.respondWithName);

app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);


app.listen(app.get("port"));