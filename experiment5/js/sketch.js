// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
function setup() {
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
    canvas.parent("canvas-container");
// resize canvas is the page is resized
    $(window).resize(function() {
        console.log("Resizing...");
        resizeCanvas(canvasContainer.width(), canvasContainer.height());
    });
    noFill();
    background(255);
    strokeWeight(2);
    stroke(0, 25);
  }
  
  function draw() {
    if (mouseIsPressed && mouseButton == LEFT) {
      push();
      translate(width / 2, height / 2);
  
      var circleResolution = int(map(mouseY + 100, 0, height, 2, 10));
      var radius = mouseX - width / 2;
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
  }
  
  function keyReleased() {
    if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  }