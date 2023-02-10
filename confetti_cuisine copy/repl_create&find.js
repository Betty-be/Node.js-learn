const mongoose =require("mongoose"),
    Subscriber = require("./models/subscriber");

mongoose.connect(
    "mongodb://localhost:27017/recipe_db",
    {useNewUrlParser: true}
);

mongoose.set('strictQuery', false);

mongoose.Promise =global.Promise;

Subscriber.create({
    name: "Mary",
    email: "goaround@peop.com",
    zipCode: "32454"
})
    .then(subscriber => console.log(subscriber))
    .catch(error => console.log(error.message));

// set up a variable to hold query results
var subscriber;
Subscriber.findOne({
    name: "try"
}).then(result => {
    subscriber = result;
    console.log(subscriber.getInfo());
});