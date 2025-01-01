const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require("./routes/product.routes.js")
const app = express()

//middleware
app.use(express.json()); //middleware to allow us to view json objectd
app.use(express.urlencoded({extented: false}));

/**
 * Defines a route in an Express application that listens for HTTP GET requests on the root URL path (/).
 * This method is used to define a route that handles GET requests.
 * 
 * '/' Is the path or endpoint for the route.
 * 
 * (req, res) => { ... } - a route handler, which executes when a client makes a GET request to /
 * 
 * It takes two arguments, req (request) and res (response), which are objects provided by Express to handle the HTTP request and response.
 * req object represents the HTTP request made by the client. 
 * res object represents the HTTP response that the server sends back to the client.
 */

app.get('/', (req, res) => {
    res.send("Hello from Node API Server  Updated");
});

//routes
app.use("/api/products", productRoute);





mongoose.connect("mongodb+srv://olojede30:xqWSWV9fWLh8Hr2C@backenddb.mhn3w.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to the database! ");
        //Starts the Express application and makes it listen for incoming HTTP requests on the specified port
        app.listen(3000, () => {
            console.log('Server is runnning on port 3000');
        });
    })
    .catch(() => {
        console.log("Connection failed!");
    })

