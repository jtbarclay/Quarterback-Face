require('dotenv').config();
const express = require('express');
const router = express.Router();
const fs = require('fs');
const AWS = require('aws-sdk')
const symmetryCalc = require('../modules/symmetryCalc');
const path = require('path');

let filePath = null;

router.post('/', (req, res) => {

    const s3 = new AWS.S3();
    // Read content from the file
    const fileContent = fs.readFileSync(req.files.fileUpload.file);

    // Setting up S3 upload parameters
    const params = {
        Bucket: process.env.S3_BUCKET,
        Key: req.files.fileUpload.filename, // File name you want to save as in S3
        Body: fileContent
    };

    filePath = path.resolve(req.files.fileUpload.file, '..', '..');

    // Uploading files to the bucket
    s3.upload(params, function (err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Key}`);
        if (data) {
            console.log('data is here');
            // setting up rekognition
            const bucket = process.env.S3_BUCKET // the bucketname
            const photo = data.Key // the name of file
            const config = new AWS.Config({
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                region: process.env.AWS_REGION
            })
            const client = new AWS.Rekognition();
            const params = {
                Image: {
                    S3Object: {
                        Bucket: bucket,
                        Name: photo
                    },
                },
                Attributes: ['ALL']
            }

            // rekognition api call
            client.detectFaces(params, function (err, response) {
                if (err) {
                    console.log(err, err.stack); // an error occurred
                } else {
                    console.log(`Detected faces for: ${photo}`)
                    // send results back to client                    
                    res.send(symmetryCalc(response.FaceDetails));

                    console.log('inside callback filePath:', filePath);
                    fs.rmdir(filePath, { recursive: true }, function (err) {
                        if (err) {
                            console.log('error deleting picture', err);
                        }
                    });
                }
            });
        }
    });
    // console.log('in aws router, path: ',path.resolve(req.files.fileUpload.file, '..', '..'));



});

module.exports = router;