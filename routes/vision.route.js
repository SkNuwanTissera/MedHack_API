'use strict'
const Constants = require('../config/config');
const Vision = require('@google-cloud/vision');
const request = require('request');
const fs = require('fs');
const express = require('express')
const router = express.Router()
const Pusher = require('pusher');

router.get('/', (req,res) => {

    const visionURI = `https://vision.googleapis.com/v1/images:annotate?key=${Constants.VISION_API_KEY}`;
    const fileName = process.cwd()+"/assets/img/crash.jpg";
    var imageFile = fs.readFileSync(fileName);

    var encoded = new Buffer(imageFile).toString('base64');
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
                            "type":"LABEL_DETECTION",
                            "maxResults":10
                        }
                    ]
                }
            ]
        },
        json: true
    };

    request(options, function (error, response, body) {
        var pusher = new Pusher({
            appId: '404501',
            key: '93c03fd6dd15021f034f',
            secret: 'd7fc4544d54093176422',
            cluster: 'ap2',
            encrypted: true
        });
        pusher.trigger('my-channel', 'my-event', {
            "message": body,
            "image": "",
            "location":{lat: 6.929561, lng: 79.86259, severity:"High"}
        });
        res.send(body);
    })
});

module.exports = router;