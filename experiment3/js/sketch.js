// sketch.js - Generative Art Dot Painting. Uses random colored dots to fill out a canvas and keeps making new ones over and over. Perhaps a seizure warning is necessary due to flashing colors.
// Author: Joshua Vaillancourt
// Date: 1/29/24

// KEYS
// s                   : save png
//
//'use strict';

var maxCount = 1601; // max count of the cirlces
var currentCount = 1;
var x = [];
var y = [];
var r = [];
var Red = 0;
var Green = 0;
var Blue = 0;

function setup() {
// place our canvas, making it fit our container
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
    canvas.parent("canvas-container");
// resize canvas is the page is resized
    $(window).resize(function() {
        console.log("Resizing...");
        resizeCanvas(canvasContainer.width(), canvasContainer.height());
    });
 //createCanvas(400, 400);
    strokeWeight(0.5);

 // first circle
 //x[0] = 5;
// y[0] = 5;
 //r[0] = 10;
 
}

function draw() {
 //clear();
    x[0] = 5;
    y[0] = 5;
    r[0] = 10;

    for (var i = 1; i < currentCount; i++) {
        if(i % 40 == 0) {
        x[i] = 5;
        y[i] = y[i-1] + 10;
    } else {
        x[i] = x[i-1] + 10;
        y[i] = y[i-1];
    }
    }
    currentCount++;

 // draw them
    for (var i = 0; i < currentCount; i++) {
        var bruh = random([1, 2, 3]);
    if (bruh == 1) {
        Red = noise(frameCount*40)*200;
        Green = noise(frameCount*48)*200;
        Blue = noise(frameCount*68)*200;
    } else if (bruh == 2) {
        Red = noise(frameCount*120)*200;
        Green = noise(frameCount*161)*200;
        Blue = noise(frameCount*187)*200;
    } else if (bruh == 3) {
        Red = noise(frameCount*235)*200;
        Green = noise(frameCount*245)*200;
        Blue = noise(frameCount*238)*200;
    }
    fill(Red, Green, Blue);
    circle(x[i], y[i], 10);
    }

    if (currentCount >= maxCount){
    currentCount = 1;
    }
}

function keyReleased() {
 if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}