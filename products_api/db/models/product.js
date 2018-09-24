const mongoose = require('mongoose');

let Product = mongoose.model("Product", {
    productId: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    productType: {
        type: String,
        required: true
    },
    productImages: {
        type: String,
        required: true
    },
    availability: {
        type: String,
        default: "In Stock"
    },
    color: {
        type: Array
    }


})

module.exports = {
    Product
}