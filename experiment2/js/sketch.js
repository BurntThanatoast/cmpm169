// sketch.js - Experiment 2 vector art. Made a thing that creates triangles and rotates them with random colors for the lines. It makes a cool design as it is oscillating over and over.
// Author: Joshua Vaillancourt
// Date: 1/22/24

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
