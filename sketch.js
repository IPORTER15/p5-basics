var a;
var b;
var newHeight;

function setup(){
    createCanvas(600,400);
    background(150,150,150);
    a = 100;
    b = 50;
    newHeight = a + b;
}

function draw(){
    fill(150,0,255);
    ellipse(mouseX,200,100,newHeight);
}