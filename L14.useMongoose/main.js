const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost:27017/recipe_db",
    {useNewUrlParser: true}
);
const db = mongoose.connection;

const subscriberSchema = mongoose.Schema({
    name: String,
    email: String,
    zipCode: Number
});

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

var subscriber1 = new Subscriber({
    name: "Jon Wexler",
    email: "jon@jonwexler.com"
});

subscriber1.save((error, savedDocument) => {
    if (error) console.log(error);
    console.log(savedDocument);
});

Subscriber.create(
    {
        name: "Jon Wexler",
        email: "jon@jonwexler.com"
    },
    function (error, savedDocument) {
        if(error) console.log(error);
        console.log(savedDocument);
    }
);

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});