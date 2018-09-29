const mongoose = require('mongoose');

let Contact = mongoose.model("Contact", {

    customerName: {
        type: String,
        required: true
    }, customerEmail: {
        type: String,
        required: true
    }, customerPhoneNum: {
        type: String,
        required: true
    }, customerMessage: {
        type: String,
        required: true
    }

})

module.exports = {
    Contact
}