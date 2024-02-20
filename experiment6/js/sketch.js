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

var font = 'sans-serif';
var letter = 'A';

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  fill(0);

  textFont(font);
  textAlign(CENTER, CENTER);
}

function mouseMoved() {
  clear();
  textSize((mouseX - width / 2) * 5 + 1);
  text(letter, width / 2, mouseY);
}

function mouseDragged() {
  textSize((mouseX - width / 2) * 5 + 1);
  text(letter, width / 2, mouseY);
}

function keyReleased() {
  if (keyCode == CONTROL) saveCanvas(gd.timestamp(), 'png');
}

function keyTyped() {
  letter = key;
}
