'use strict';
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
require('./config/database');

var app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // to get information from html forms
app.use('/', express.static(__dirname + '/'))

//Routes
const UserRouter = require('./routes/user.route');
const visionRouter = require('./routes/vision.route');

app.use('/api/v1/vision',visionRouter);
app.use('/api/v1/users',UserRouter);

app.get('/api/v1/', (req, res, next) => {
    res.sendFile('index.html');
});

app.listen(6600, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('app listening on port 6600');
});