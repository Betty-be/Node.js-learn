const mongoose = require("mongoose"),
    subscriberSchema = mongoose.Schema({
        name: String,
        email: String,
        zipCode: Number
    });

// assign subscriber model to the module, that other modules in the application could accessible the subscriber model
module.exports = mongoose.model("Subscriber", subscriberSchema);