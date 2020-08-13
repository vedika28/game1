
var block1Img,block2Img,block1,block2;
var bgImg,bg;
var player;

function preload() {
  block1Img=loadImage("images/block1.jpg");
  block2Img=loadImage("images/block2.jpg");  
  bgImg=loadImage("images/bg.jpg"); 
}

function setup() {
  createCanvas(800,400);

  bg=createSprite(400,200,800,20);
  bg.addImage(bgImg);

  player=new Player(width/2,height/2,20,20);

}

function draw() {
  background(0); 
  
 bg.velocityX=-3;
  if (bg.x<300) {
    bg.x=bg.width/2;
  }

  player.behaviour();

  drawSprites();
}