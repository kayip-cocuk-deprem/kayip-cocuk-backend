const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser');
const dbo = require('./db/conn.js');

const app = express();

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

console.log("Will try to connect database...");

dbo.connectToServer(function(err){
    if (err == null) {
        app.listen(process.env.PORT)
    }
})

module.exports = app;