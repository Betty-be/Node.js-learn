const port = 3000,
    express = require("express"),
    app = express();

app.get("/", (req, res) => {
    res.send("Hello, Universe!");
    console.log(req.params);
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);
})

app.post("/contact", (req, res) => {
    res.send("Contact information submitted successfully.");
})

.get("/items/:vegetable", (req, res) => {
    res.send(req.params.vegetable);
})

.listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
});

