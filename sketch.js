

var fixedRect;

var movingRect;

function setup() {
  createCanvas(1200,800);

  //Creating sprites for both fixed & moving rectangle
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "yellow"

  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green"
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  //console.log(movingRect.x - fixedRect.x); //fixedRect/2 = 25 , movingRect/2 = 40
  //console.log(movingRect.x - fixedRect.Rect)
  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 
    && movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 && fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor =  "red"
  }
  else{
    movingRect.shapeColor = "green"
  }

  drawSprites();
}