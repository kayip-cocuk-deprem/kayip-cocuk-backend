const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const router = require('./router')

const dotenv = require('dotenv')
dotenv.config()
const app = express();

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/', router)

mongoose.connect(
    process.env.CONNECTIONSTRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.listen(process.env.PORT);
console.log("app is running on port " + process.env.PORT)