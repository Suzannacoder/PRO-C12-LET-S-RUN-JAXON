var jaxon, jaxon_running,bomb,coin,energyDrink;
var path, invisiblePath, pathImage,bombImg,coinIg,energyDrinkImg;

function preload() {
  jaxonImage = loadImage("Runner-1.png", "Runner-2.png");

  pathImage = loadImage("path.png");

  bombImage = loadImage("bomb.png");

  coinImage = loadImage("coin.png");

  energyDrinkImage = loadImage("energyDrink.png");
}

function setup() {
  createCanvas(400, 400);

  //create a path sprite
  path = createSprite(200,190,20,400);
  path.addImage(pathImage);
  path.y = path.height/2;
  path.velocityY = 4;
  invisiblePath=createSprite(200,190,50,400);
  invisiblePath.visible=false
  
//create a jaxon sprite
jaxon = createSprite(200,190,30,30);
jaxon.addImage( jaxonImage);
jaxon.scale = 0.1;

}

function draw() {
  background(220);

  jaxon.x=mouseX

 //code to reset background
  if (path.y > 400) {
    path.y = path.height/2;
  }

  jaxon.collide(invisiblePath);
  drawSprites();
}






