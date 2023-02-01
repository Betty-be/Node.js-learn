const Course = require("./models/course"),
    Subscriber = require("./models/subscriber");
var testCourse, testSubscriber;
Course.create( {
    title: "Tomato Land",
    description: "Locally farmed tomatoes only",
    zipCode: 12345,
    items: ["cherry", "heirloom"]
}).then(course => testCourse = course);
Subscriber.findOne({}).then(
    subscriber => testSubscriber = subscriber
);
testSubscriber.course.push(testCourse);
testSubscriber.save();
Subscriber.populate(testSubscriber, "courses").then(subscriber =>
    console.log(subscriber)
);