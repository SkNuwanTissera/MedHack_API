const mongoose = require('mongoose');
const constants = require('./config');
const bluebird = require('bluebird');

mongoose.Promise = bluebird;

mongoose.connect(constants.MONGO_URL, { useMongoClient: true }).then( () => {
  	console.log("Connected to database " + constants.MONGO_URL);
  },
  err => { 
  	console.log("Database Error Occured : " + err);
  }
);