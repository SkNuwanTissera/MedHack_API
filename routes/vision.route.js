'use strict'

// Dependencies
const Vision = require('@google-cloud/vision');
const request = require('request');
const fs = require('fs');

const API_KEY = "AIzaSyA65FEKhKGNEcx6C5iYjdHrX0YMtw3cpr4";
const visionURI = "https://vision.googleapis.com/v1/images:annotate?key="+API_KEY;

const fileName = process.cwd()+"/assets/img/elephant.jpg";
var imageFile = fs.readFileSync(fileName);

// Covert the image data to a Buffer and base64 encode it.
var encoded = new Buffer(imageFile).toString('base64');
console.log(encoded);
exports.callVision = function (req, res) {

        const options = {
            method: 'POST',
            uri: visionURI,
            body: {
                "requests":[
                    {
                        "image":{
                            "content":encoded
                        },
                        "features":[
                            {
                                "type":"FACE_DETECTION",
                                "maxResults":10
                            }
                        ]
                    }
                ]
            },
            json: true
        };

        request(options, function (error, response, body) {
            res.send(response);
        })

}