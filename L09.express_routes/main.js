const port = 3000,
    homeController = require("./controllers/homeController"),
    express = require("express"),
    app = express();

app.get("/items/:vegetable", homeController.sendReqParam);


// app.use((req, res, next) => {
//     console.log(`request made to: ${req.url}`);
// });

app.use(express.urlencoded({
    extended: false})
);

app.use(express.json());

app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});