// /* ALL LIBRARYS BEING USED */
const express = require('express'),//HELPS CREATE AN EXPRESS API
    cors = require('cors'),//ALLOWS CROSS ORGIN REQUESTS
    bodyParser = require('body-parser'),//HELPS PARSE THE BODY WHEN DATA IS SUBMITTED
    _ = require("lodash"),//USING THE .pick METHOD TO SELECT WHAT I WANT OFF THE OBJECT WHEN DATA IS SUBMITTED
    port = 8080,//THE PORT I AM LISTENING/USING
     mysql = require('mysql');
     require('dotenv').config();
     const connection = mysql.createConnection({
        host     : 'road2hire.ninja',
        user     : process.env.MYSQLUSER,
        password : process.env.MYSQLPASS,
        database : 'mmitchell'
      });

console.log(`SERVER STARTED, LISTENING ON PORT ${port}`);
const app = express();//SETTING UP THE EXPRESS API

app.use(cors());
//----body-parser is middleware extracts the entire body portion of an incoming request stream and exposes it on REQUEST.BODY----//
app.use(bodyParser.json());//HELPS PARSE INCOMING BODY AND USE IT IN API
app.use(bodyParser.urlencoded({
    extended: true
}));//ALLOW YOU TO PARSE FULL OBJECTS AND HELPS READ DATA

//-----------------------------------PRODUCT REQUESTS-----------------------------------//

//GETTING PRODUCTS AND SENDING THEM TO REACT APP
app.get("/products", (request, response) => {
//  console.log(request);
 connection.query('SELECT * from duragsrus_products', (error, results, fields) =>{
    if (error) throw error;
    response.send(JSON.stringify(results));
  });
});

// //GETTING PRODUCTS BY _id
app.get("/products/:id", (request, response) => {
    let insertedId = request.params.id;
    // console.log(request.body)
    connection.query(`SELECT * from duragsrus_products WHERE _id=${connection.escape(insertedId)}`, (error, results, fields) =>{
        if (error) throw error;
        response.send(JSON.stringify(results));
      });
});

// ADDING A NEW PRODUCT
app.post("/products", (request, response) => {
    const { title, description, price, productType, productImages } = request.body;
    const sqlQuery = `INSERT INTO duragsrus_products (title, description, price, productType, productImages)
    VALUES("${title}", "${description}", "${price}", "${productType}", "${productImages}")`;
    connection.query(sqlQuery, (error, results, fields) =>{
        if (error) throw error;
        response.send(JSON.stringify(results));
        console.log(results)
      });
});

//UPDATE A PRODUCT
app.put("/products/:id", (request, response) => {
    let insertedId = request.params.id;
    const { title, description, price, productType, productImages, _id } = request.body;
    let sqlQuery = `UPDATE duragsrus_products
    SET title = "${title}",
     description = "${description}",
     price = "${price}",
     productType = "${productType}",
     productImages = "${productImages}"
     WHERE _id=${connection.escape(insertedId)}`;
    connection.query(sqlQuery, (error, results, fields) =>{
        if (error) throw error;
        console.log(request.body)
        response.send(JSON.stringify(results));

      });
});

//DELETING PRODUCTS BY _id
app.delete("/products/:id",
 (request, response) => {
    let insertedId = request.params.id;
    console.log(request.body)
    connection.query(`DELETE from duragsrus_products WHERE _id=${connection.escape(insertedId)}`, (error, results, fields) =>{
        if (error) throw error;
        response.send(JSON.stringify(results));
      });
});

//-----------------------------------CONTACT REQUESTS-----------------------------------//
//SENDS ALL CONTACT INFORMATION
app.get("/contact/data", (request, response) => {
    connection.query(`SELECT * FROM duragsrus_contact`, (error, results, fields) =>{
        if (error) throw error;
        response.send(JSON.stringify(results));
      });
});

//ADDING A NEW CONTACT INFORMATION POST
app.post("/contact", (request, response) => {
    const { customerName, customerEmail, customerPhoneNum, customerMessage } = request.body;
    const sqlQuery = `INSERT INTO duragsrus_contact (customerName, customerEmail, customerPhoneNum , customerMessage)
    VALUES ("${customerName}","${customerEmail}","${customerPhoneNum}","${customerMessage}")`;
    connection.query(sqlQuery, (error, results, fields)=>{
        if(error) throw error;
        response.send(JSON.stringify(results))
    })
});

app.listen(port);//ALLOW ME TO LISTEN TO API ON PORT I SET ABOVE

