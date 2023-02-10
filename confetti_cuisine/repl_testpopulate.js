const mongoose =require("mongoose"),
    Course = require("./models/course"),
    Subscriber = require("./models/subscriber");

var testCourse, testSubscriber;

mongoose.connect(
    "mongodb://localhost:27017/recipe_db",
    {useNewUrlParser: true}
);

mongoose.set('strictQuery', false);

mongoose.Promise =global.Promise;

Course.findOne({}).then(
    course => testCourse = course
);

Subscriber.findOne({}).then(
    subscriber => testSubscriber = subscriber
);

testSubscriber.course.push(testCourse);
testSubscriber.save();
Subscriber.populate(testSubscriber, "courses").then(subscriber =>
    console.log(subscriber)
);