const mongoose = require('mongoose');

/* SETTING UP THE CONTACT COLLECTION'S SCHEMA */

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