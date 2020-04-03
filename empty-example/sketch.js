function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  noStroke(); }

function draw() {
  background(mouseY,mouseX,0,100);
  var cx = map(mouseX, 0, width, 0, 255);
  var cy = map(mouseY, 0, height, 255, 0);
  var nsize = width/8+cos(mouseY*PI/180)*width/16;
  fill(cx,100,cy,204);
  rect(width-mouseX, height-mouseY,nsize,nsize);
  rect(width-mouseX-nsize*2, height-mouseY-nsize*2,nsize,nsize);
  rect(mouseX, mouseY,nsize,nsize);
  rect(mouseX+nsize*2, mouseY+nsize*2,nsize,nsize);// put drawing code here
}