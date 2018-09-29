let mongoose = require("mongoose");
let { Product } = require("./models/product");
let { Contact } = require('./models/contact');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/DuragsRUs", { useNewUrlParser: true });

module.exports = {
    mongoose, Product, Contact
};

