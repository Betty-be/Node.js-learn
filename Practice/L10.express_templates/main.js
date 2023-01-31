const homeController = require("./controllers/homeController"),
    layouts = require("express-ejs-layouts"),
    express = require("express"),
    app = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(layouts);

app.get("/name/:myName", homeController.respondWithName);



app.listen(app.get("port"));
