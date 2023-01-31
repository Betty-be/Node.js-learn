// store the functions where my routes will use.

// 1.require this controller by adding in main.js
// 2.All three of these functions  respond with an EJS page reflecting the requested route.
// so create the following  views: courses.ejs, contact.ejs, and thanks.ejs in views

// Define an array of courses
var courses = [
    {
        title: "Event Driven Cakes",
        cost: 50
    },
    {
        title: "Asynchronous Artichoke",
        cost: 25
    },
    {
        title: "Object Oriented Orange Juice",
        cost: 10
    }
];

exports.showCourses = (req, res) => {
    res.render("courses", {
        // pass the courses array to the view
        offeredCourses: courses
    });
};

exports.showSignUp = (req, res) => {
    res.render("contact");
};

exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
};