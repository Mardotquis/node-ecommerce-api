// /* ALL LIBRARYS BEING USED */
// const express = require('express'),//HELPS CREATE AN EXPRESS API
//     cors = require('cors'),//ALLOWS CROSS ORGIN REQUESTS
//     bodyParser = require('body-parser'),//HELPS PARSE THE BODY WHEN DATA IS SUBMITTED
//     _ = require("lodash"),//USING THE .pick METHOD TO SELECT WHAT I WANT OFF THE OBJECT WHEN DATA IS SUBMITTED
//     port = 8080,//THE PORT I AM LISTENING/USING
//     { mongoose, Product, Contact } = require("./db/mongoose");//USING MONGOOSE TO MAKE USING MongoDB EASIER, ALSO GRABBING THE PRODUCT AND CONTACT SCHEMAS/MODELS



// console.log(`SERVER STARTED, LISTENING ON PORT ${port}`);
// const app = express();//SETTING UP THE EXPRESS API

// app.use(cors());
// //----body-parser is middleware extracts the entire body portion of an incoming request stream and exposes it on REQUEST.BODY----//
// app.use(bodyParser.json());//HELPS PARSE INCOMING BODY AND USE IT IN API
// app.use(bodyParser.urlencoded({
//     extended: true
// }));//ALLOW YOU TO PARSE FULL OBJECTS AND HELPS READ DATA

// //-----------------------------------PRODUCT REQUESTS-----------------------------------//

// //GETTING PRODUCTS AND SENDING THEM TO REACT APP
// app.get("/products", (request, response) => {
//     Product.find()//.find() is going to fetch this WHOLE collection
//         .then(
//             products => { response.send(products) },//sending the collection back
//             error => { response.send(error) }
//         )
// });

// //GETTING PRODUCTS BY productId
// app.get("/products/:id", (request, response) => {
//     let insertedId = request.params.id;
//     Product.findById(insertedId)
//         .then(
//             product => {
//                 if (!product) {
//                     return response.send("ID NOT FOUND")
//                 }
//                 response.send(product)
//             }
//         ).catch(error => { response.send(error) })
// });

// //ADDING A NEW PRODUCT
// app.post("/products", (request, response) => {
//     const { title, description, price, productType, productImages, availability } = request.body;
//     var product = new Product({
//         title, description, price, productType, productImages, availability
//     });
//     console.log(request.body)
//     product.save()
//         .then(
//             () => { response.redirect("http://localhost:3000/admin") },//REDIRECTS/RELOADS THE PAGE
//             error => { response.send(error) },

//         )
// });

// //UPDATE A PRODUCT
// app.put("/products/:id", (request, response) => {
//     let insertedId = request.params.id;
//     let body = _.pick(request.body, ["productId", "title", "description", "price", "productType", "productCategory", "productImages", "availability"]);
//     Product.findByIdAndUpdate(insertedId,
//         { $set: body }, { new: true })//$set is replacing the value on a field with a specified value & new: true is going to send back the new updated document
//         .then(
//             (product) => {
//                 if (!product) {
//                     return response.status(404).send(error);
//                 }
//                 response.send(product)
//             }
//         ).catch(error => { response.status(400).send(error) })
// });

// //DELETING PRODUCTS BY productId
// app.delete("/products/:id", (request, response) => {
//     let insertedId = request.params.id;
//     Product.findByIdAndRemove(insertedId)
//         .then(
//             product => {
//                 if (!product) {
//                     return response.status(404).send("ID NOT FOUND")
//                 }
//                 response.send(product)
//             }
//         ).catch(error => response.status(400).send(error));
// });

// //-----------------------------------CONTACT REQUESTS-----------------------------------//
// //SENDS ALL CONTACT INFORMATION
// app.get("/contact/data", (request, response) => {
//     Contact.find()
//         .then(data => { response.send(data) })
// });

// //ADDING A NEW CONTACT INFORMATION POST
// app.post("/contact", (request, response) => {
//     const { customerName, customerEmail, customerPhoneNum, customerMessage } = request.body;
//     let contact = new Contact({ customerName, customerEmail, customerPhoneNum, customerMessage });
//     console.log(request.body);
//     if (!request.body) {
//         return response.status(404).send("NOPE");
//     }
//     contact.save()
//         .then(
//             () => response.redirect("http://localhost:3000/contact"),
//             error => response.send(error)
//         )
// });

// app.listen(port);//ALLOW ME TO LISTEN TO API ON PORT I SET ABOVE

