// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
const VALUE1 = 1;
const VALUE2 = 2;

// Globals
let myInstance;
let canvasContainer;

class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    myMethod() {
        // code to run when method is called
    }
}

// setup() function is called once when the program starts
function setup() {
    createCanvas(720, 720);
    noFill();
    background(255);
    strokeWeight(2);
    stroke(0, 25);
  }
  
  function draw() {
    strokeWeight(random(2));
    stroke(random(150), random(150), random(150));
    push();
    translate(width/2, height/2);
    rotate(sin(frameCount/50));
  
    var circleResolution = int(map(sin(frameCount)*10 + 100, 0, height, 2, 10));
    var radius = cos(frameCount/50)*400;
    var angle = TAU / circleResolution;
  
    beginShape();
    for (var i = 0; i <= circleResolution; i++) {
      var x = cos(angle * i) * radius;
      var y = sin(angle * i) * radius;
      vertex(x, y);
    }
    endShape();
  
    pop();
  }
  
  function keyReleased() {
    if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
  }

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
}

