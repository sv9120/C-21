var a, b, ob2, ob1;

function setup() {
  createCanvas(1200,800);
  a = createSprite(600, 400, 50, 80);
  a.shapeColor = "yellow";
  a.debug = true;

  b = createSprite(400,200,80,30);
  b.shapeColor = "cyan";
  b.debug = true;

  ob1 = createSprite(400, 200, 50, 80);
  ob1.shapeColor = "red";
  ob1.velocityX = 4;

  ob2 = createSprite(600, 200, 50, 80);
  ob2.shapeColor = "lime";
}

function draw() {
  background(0,0,0);  
  b.x = World.mouseX;
  b.y = World.mouseY;
//if(isTouching( ob1, ob2)){

  //ob1.velocityX = 0;
//}
  
  BounceOff(ob1, ob2);
  drawSprites();
}

