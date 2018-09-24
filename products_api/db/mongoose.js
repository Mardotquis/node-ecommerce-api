let mongoose = require("mongoose");
let { Product } = require("./models/product");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/DuragsRUs");

module.exports = {
    mongoose, Product
};

