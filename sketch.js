var movinRect
var fixedRect

function setup() {
  createCanvas(800,400);
  movinRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite(300,300,50,50);

  movinRect.shapeColor= "Green";
  fixedRect.shapeColor= "Blue";
}

function draw() {
  background(255,255,255);  
  drawSprites();

movinRect.x = World.mouseX;
movinRect.y = World.mouseY;

if(movinRect.x - fixedRect.x < movinRect.width/2 + fixedRect.width/2 && 
   fixedRect.x - movinRect.x < movinRect.width/2 + fixedRect.width/2 &&
   movinRect.y - fixedRect.y < movinRect.width/2 + fixedRect.width/2 && 
   fixedRect.y - movinRect.y < movinRect.width/2 + fixedRect.width/2 
   )
  {
    fixedRect.shapeColor= "red";
  }
else
  {
    fixedRect.shapeColor= "Blue";
  }

}