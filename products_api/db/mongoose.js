let mongoose = require("mongoose");
let { Product } = require("./models/product");
let { Contact } = require('./models/contact');
mongoose.Promise = global.Promise;//USING THE OLD MONGOOSE PROMISE SETUP INSTEAD OF USING CALLBACKS
mongoose.connect("mongodb://localhost:27017/DuragsRUs", { useNewUrlParser: true }); //CONNECTING TO THE MongoDB DATABASES

module.exports = {
    mongoose, Product, Contact
};//EXPORTING EVERYTHING

