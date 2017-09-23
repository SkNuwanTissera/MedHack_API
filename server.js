'use strict';

const bodyParser = require('body-parser');
const express = require('express');


var app = express();

//load models
require('./models/user.model');



const UserRouter = require('./routes/user.route');


// Init App


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // to get information from html forms

app.use('/', express.static(__dirname + '/'))



app.use('/api/users', UserRouter);


app.get('/', (req, res, next) => {
    res.sendFile('index.html');
});


app.listen(6600, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('app listening on port 6600');
});

//for unit testing
module.exports = app;