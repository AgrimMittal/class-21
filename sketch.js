var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "blue";

  movingRect = createSprite(50,50,50,50);
  movingRect.shapeColor = "blue";

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "blue";

  gameObject2 = createSprite(300,100,50,50);
  gameObject2.shapeColor = "blue";
}

function draw() {
  background("black");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else if(isTouching(gameObject1,movingRect)){
    gameObject1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else if(isTouching(gameObject2,movingRect)){
    gameObject2.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
  }

  drawSprites();
}

