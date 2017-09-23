'use strict'
const Constants = require('../config/config');
const Vision = require('@google-cloud/vision');
const request = require('request');
const fs = require('fs');
const express = require('express')
const router = express.Router()


router.get('/', (req,res) => {
    const visionURI = `https://vision.googleapis.com/v1/images:annotate?key=${Constants.VISION_API_KEY}`;
// const fileName = process.cwd()+"/assets/img/elephant.jpg";
// var imageFile = fs.readFileSync(fileName);

// // Covert the image data to a Buffer and base64 encode it.
// var encoded = new Buffer(imageFile).toString('base64');
// console.log(encoded);
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
});

module.exports = router;