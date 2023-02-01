const mongoose = require("mongoose"),
    subscriberSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        zipCode: {
            type: Number,
            min: [10000, "Zip code too short"],
            max: 99999
        },
        courses: [{type: mongoose.Schema.Types.ObjectId, ref: "Course"}]
    });

subscriberSchema.methods.getIngo = function() {
    return `Name: ${this.name} Email: ${this.email} Zip Code: ${this.zipCode}`;
};

subscriberSchema.methods.findLocalSubscribers = function() {
    return this.model("Subscriber")
    .find({zipCode: this.zipCode})
    .exec();
};

// assign subscriber model to the module, that other modules in the application could accessible the subscriber model
module.exports = mongoose.model("Subscriber", subscriberSchema);