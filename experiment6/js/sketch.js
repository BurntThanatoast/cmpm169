// sketch.js - Experiment 6: Grammars & Text Art
// Author: Joshua Vaillancourt
// Date: 2/19/24

/**
 * changing the size and the position of a letter
 *
 * MOUSE
 * position x          : size
 * position y          : position
 * drag                : draw
 *
 * KEYS
 * a-z                 : change letter
 * ctrl                : save png
 */

'use strict';

var font = 'times-new-roman';
var letter = 'L';

function setup() {
    // place our canvas, making it fit our container
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), canvasContainer.height(), WEBGL);
    canvas.parent("canvas-container");
    // resize canvas is the page is resized
    $(window).resize(function() {
        console.log("Resizing...");
        resizeCanvas(canvasContainer.width(), canvasContainer.height());
    });
    //createCanvas(windowWidth, windowHeight);
    background(0);
    fill(250);
    frameRate(60);

    textFont(font);
    textAlign(CENTER, CENTER);
}

function draw() {
    //rotate(sin(frameCount)/20);
    text(letter, (sin(frameCount) * width/2) + width/2, (cos(frameCount) * height/2) + height/2);
    text(letter, sin(frameCount) * width, height/2);
    text(letter, width/2, sin(frameCount) * height);
    text(letter, sin(frameCount) * width, sin(frameCount) * height);
    text(letter, width - sin(frameCount) * width, sin(frameCount) * height);
}

function mouseMoved() {
    //clear();
    background(0,0,0, 100)
    textSize(abs(mouseX-mouseY) + 1);
    //text(letter, mouseX, mouseY);
}

function mouseDragged() {
    background(0,0,0, 1)
    textSize(abs(mouseX-mouseY) + 1);
    text(letter, mouseX, mouseY);
}

function keyReleased() {
    if (keyCode == CONTROL) saveCanvas(gd.timestamp(), 'png');
}

function keyTyped() {
    letter = key;
}
