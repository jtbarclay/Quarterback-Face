// imports
const midPoint = require('midpoint');
const ss = require('simple-statistics');

// array definitions
const eyebrows = [];
const eyes = [];
const nose = [];
const mouth = [];
const upperJawline = [];
const midJawline = [];

// this function pushes from data into the respective arrays
const dataPusher = (data, array, left, right) => {
    data[0].Landmarks.forEach(landmark => {
        
        if (landmark.Type === left) {
            array.push([landmark.X, landmark.Y])
        }

        if (landmark.Type === right) {
            array.push([landmark.X, landmark.Y])
        }
    })
}

// calculates the distance from a point to a line y=mx+b
const distance = (m, b, x, y) => {
    return (Math.abs(b + (m * x) - y) / Math.sqrt(1 + (m * m)));
}

// easier inputs to distance calc
const distanceCalc = (line, point) => {
    return distance(line.m, line.b, point[0], point[1]);
}

//returns an object with differences between matching features from facial midpoint
const symmetryCalc = (data) => {
    dataPusher(data, eyebrows, 'leftEyeBrowLeft', 'rightEyeBrowRight');
    dataPusher(data, eyes, 'eyeLeft', 'eyeRight');
    dataPusher(data, nose, 'noseLeft', 'noseRight');
    dataPusher(data, mouth, 'mouthLeft', 'mouthRight');
    dataPusher(data, upperJawline, 'upperJawlineLeft', 'upperJawlineRight');
    dataPusher(data, midJawline, 'midJawlineLeft', 'midJawlineRight');

    // consolidates midpoints from all of the feature arrays into one array
    const faceMidPoints = [midPoint(eyebrows), midPoint(eyes), midPoint(nose), midPoint(mouth), midPoint(upperJawline), midPoint(midJawline)];

    // regression of midpoints
    let faceLine = ss.linearRegression(faceMidPoints);

    return {
        eyebrows: Math.abs(distanceCalc(faceLine, eyebrows[0])-distanceCalc(faceLine, eyebrows[1])),
        eyes: Math.abs(distanceCalc(faceLine, eyes[0])-distanceCalc(faceLine, eyes[1])),
        nose: Math.abs(distanceCalc(faceLine, nose[0])-distanceCalc(faceLine, nose[1])),
        mouth: Math.abs(distanceCalc(faceLine, mouth[0])-distanceCalc(faceLine, mouth[1])),
        upperJawline: Math.abs(distanceCalc(faceLine, upperJawline[0])-distanceCalc(faceLine, upperJawline[1])),
        midJawline: Math.abs(distanceCalc(faceLine, midJawline[0])-distanceCalc(faceLine, midJawline[1])),
    };
}

module.exports = symmetryCalc;
