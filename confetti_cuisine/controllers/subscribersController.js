const Subscriber = require("../models/subscriber");

module.exports ={
  index: (req, res) => {
    User.find({})
        .then(subscribers => {
            res.render("subscriber/index", {
              subscribers: subscribers
            })
        })
        .catch(error => {
            console.log(`Error fetching users: ${error.message}`);
            res.redirect("/");
        });
  },
  getSubscriptionPage: (req, res) => {
    res.render("contact");
  },
  saveSubscriber: (req, res) => {
    let newSubscriber = new Subscriber({
      name: req.body.name,
      email: req.body.email,
      zipCode: req.body.zipCode
    });
    newSubscriber.save()
      .then(result => {
        res.render("thanks");
      })
      .catch(error => {
        if (error) res.send(error);
      });
  }
};