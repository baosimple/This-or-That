//import dependencies
const express = require('express');
const http = require('http');

//setup
const app = express();
const server = http.createServer(app);

//set to use ejs and look under views folder
app.set('view engine', 'ejs');
//set static folder to use for static styles
app.use('/public', express.static('public'));

//mongodb setup
const MongoClient = require('mongodb').MongoClient;
const url = //[insert mongo uri here]
const dbName = "this-or-that"
const client = new MongoClient(url, { useUnifiedTopology: true });

//import routes
const { landingRender } = require('./routes/index');

//call functions based on route request
app.get('/', landingRender);

//set port
const PORT = process.env.PORT || 3000;
//connection to database and starting server at designated port
client.connect(function (err) {

    if (err) throw err;

    console.log("Successfully connected to MongoDB database");

    server.listen(PORT, () => console.log(`Server live at localhost:${PORT}`));

    const db = client.db(dbName);
    const collection = db.collection('lists');
    global.db = db;
    global.collection = collection;

});