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

var font = 'times-new-roman';
var letter = 'L';

function setup() {
    createCanvas(800, 800);
    background(0);
    fill(250);
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
    clear();
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
