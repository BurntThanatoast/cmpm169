// sketch.js - Experiment 4 Images, Video, Sound Art
// Author: Joshua Vaillancourt
// Date: 2/5/24

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
    createCanvas(800, 800);
    background(0);
	
    sinFilter = new p5.BandPass();
	
    sinOsc = new p5.Oscillator('sawtooth');
    sinOsc.amp(0);
    sinOsc.freq(10);
    sinOsc.start();
    sinOsc.disconnect();
    sinOsc.connect(sinFilter);
    delay = new p5.Delay();
  
}

function draw() {
    fill(mouseX/4, mouseY/4, (mouseX+mouseY)/8)
    circle(mouseX, mouseY, (mouseX+mouseY)/5);
    let setFreq = ((mouseX+mouseY)*2);
    sinFilter.freq(setFreq);
    sinFilter.res(5);
    sinOsc.pan((mouseX*2-windowWidth)/(windowWidth));
    delay.process(sinOsc, (windowHeight-mouseY)/(windowHeight+100));
}

function mouseIsPressed(){
    userStartAudio();
    sinOsc.amp(1);
}

function mouseDragged(){
    userStartAudio();
    sinOsc.amp(1);
}

function mouseReleased(){
    sinOsc.amp(0)
}