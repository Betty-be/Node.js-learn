const mongoose =require("mongoose"),
    User = require("./models/user"),
    Subscriber = require("./models/subscriber");

mongoose.connect(
    "mongodb://localhost:27017/recipe_db",
    {useNewUrlParser: true}
);

mongoose.set('strictQuery', false);

mongoose.Promise =global.Promise;
var testUser;
User.create({
    name: {
        first: "happy",
        last: "linda"
    },
    email: "happy@hahaha.com",
    password: "pass333"
})
    .then(user => testUser = user)
    .catch(error => console.log(error.message));

var targetSubscriber
Subscriber.findOne({email: testUser.email})
    .then(subscriber=> targetSubscriber = subscriber)
    .catch(e => console.log(e.message));