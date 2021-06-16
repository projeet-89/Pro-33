

var background,backgroundImg;
var snow,snow1,snow2,snowImg,snow1Img,snow2Img;


function preload(){
  backgroundImg = loadImage("snow2.jpg");
  snowImg = loadImage("snow5.webp");
  snow1Img = loadImage("snow5.webp");
  snow2Img = loadImage("snow5.webp");
}


function setup() {
  createCanvas(800,400);

  background=createSprite(500,50) ; 
 
  snow= createSprite(400, 200, 50, 50);
  snow1= createSprite(100, 200, 60,60);
  snow2= createSprite(50, 600, 30,30);

  snow.scale = 0.1;
  snow1.scale = 0.1;
  snow2.scale = 0.1;

  snow.velocityY = 2;
  snow1.velocityY = 2;
  snow2.velocityY = 2;

  
  
 
 
}



function draw() {
 

 
  background.addImage("background",backgroundImg);
  snow.addImage("snow",snowImg);
  snow1.addImage("snow",snowImg);
  snow2.addImage("snow",snowImg);

 
 
  drawSprites();
}