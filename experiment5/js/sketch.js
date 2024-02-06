// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
var sinOsc, sinFilter;


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
    
    background(0);
  
}

function draw() {
    fill(mouseX/4, mouseY/4, (mouseX+mouseY)/8)
    circle(mouseX, mouseY, (mouseX+mouseY)/5);
}
