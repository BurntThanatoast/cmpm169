// sketch.js - Experiment 5 - 3D Graphics
// Author: Joshua Vaillancourt
// Date: 2/12/24

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
  //createCanvas(4/3*windowHeight, windowHeight, WEBGL);
	colorMode(HSB, 255);
  frameRate(60);
}

function draw() {
  
  background(0);
  ambientLight(100);
  pointLight(200, 200, 200, -400, -800, 800);
  stroke('black');
  rotateY(-frameCount / 100.0);
  rotateX(frameCount / 50.0);


  for (let i = 0; i < 256; i++) {
    push();
    normalMaterial();
    
    rotateZ(sin(frameCount)/50 + i / 24.0+1000);
    rotateY(cos(frameCount)/50 / 22.0);
    //rotateX(sin(frameCount)/50 + i / 20.0+500);
    translate(random(500), 0, 0);
    scale(0.02)
  
    
    box(width / 10);
    pop();
  }
  
  for (let i = 0; i < 256; i++) {
    push();
    normalMaterial();
    
    rotateY(cos(frameCount)/50 / 22.0-500);
    rotateZ(sin(frameCount)/50 + i / 24.0+1000);
    //rotateX(sin(frameCount)/50 + i / 20.0+500);
    translate(random(500), 0, 0);
    scale(0.02)
  
    
    box(width / 10);
    pop();
  }
  
  for (let i = 0; i < 256; i++) {
    push();
    normalMaterial();
    
    rotateY(cos(frameCount)/50 / 22.0+500);
    rotateZ(sin(frameCount)/50 + i / 24.0+1000);
    //rotateX(sin(frameCount)/50 + i / 20.0+500);
    translate(random(500), 0, 0);
    scale(0.02)
  
    
    box(width / 10);
    pop();
  }
  for (let i = 0; i < 256; i++) {
    push();
    normalMaterial();
    
    rotateY(cos(frameCount)/50 / 22.0+2000);
    rotateZ(sin(frameCount)/50 + i / 24.0+1000);
    //rotateX(sin(frameCount)/50 + i / 20.0+500);
    translate(random(500), 0, 0);
    scale(0.02)
  
    
    box(width / 10);
    pop();
  }
  for (let i = 0; i < 256; i++) {
    push();
    normalMaterial();
    
    rotateY(cos(frameCount)/50 / 22.0-2000);
    rotateZ(sin(frameCount)/50 + i / 24.0+1000);
    //rotateX(sin(frameCount)/50 + i / 20.0+500);
    translate(random(500), 0, 0);
    scale(0.02)
  
    
    box(width / 10);
    pop();
  }
}