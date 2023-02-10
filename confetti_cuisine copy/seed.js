const mongoose = require("mongoose"),
    Subscriber = require("./models/subscriber");

mongoose.set('strictQuery', false);

mongoose.connect(
    "mongodb://localhost:27017/recipe_db",
    {useNewUrlParser: true}
);

mongoose.connection;

var contacts = [
    {
        name: "vivi feiday",
        email: "1234@recipr.com",
        zipCode: 12394
    },
    {
        name: "gieoq jfksl",
        email: "dkpqwe@recipr.com",
        zipCode: 94183
    },
    {
        name: "dora lala",
        email: "lalaroe@recipr.com",
        zipCode: 49320
    }
];

// Remove all existing data
Subscriber.deleteMany()
    .exec()
    .then(() => {
        console.log("Subscriber data is empty!");
    });

var commands = [];

contacts.forEach((c) => {
    commands.push(Subscriber.create({
        name: c.name,
        email: c.email
    }));
});

Promise.all(commands)
    .then(r => {
        console.log(JSON.stringify(r));
        mongoose.connection.close();
    })
    .catch(error => {
        console.log(`ERROR: ${error}`);
    });