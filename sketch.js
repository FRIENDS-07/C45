var backgroundImg,spaceship,spaceshipImg;
var form,doodle1,doodle1Img,doodle2,doodle2Img;
var doodle3,doodle3Img,doodle4,doodle4Img;
var doodle5,doodle5Img,doodle;
var monster1,monster1Img,monster2;
var monster2Img,monster3,monster3Img;
var monster4,monster4Img,monster5;
var monster5Img,monster6,monster6Img;
var backgroundSprite;
var wall1,wall1Img,wall2,wall2Img;
var wall3,wall3Img,wall4,wall4Img,wall;

function preload(){

  backgroundImg = loadImage("Images/background.png");
  spaceshipImg = loadImage("Images/spaceship.png");

  doodle1Img = loadImage("Images/doodle1.png");
  doodle2Img = loadImage("Images/doodle2.png");
  doodle3Img = loadImage("Images/doodle3.png");
  doodle4Img = loadImage("Images/doodle4.png");
  doodle5Img = loadImage("Images/doodle5.png");

  monster1Img = loadImage("Images/monster1.png");
  monster2Img = loadImage("Images/monster2.png");
  monster3Img = loadImage("Images/monster3.png");
  monster4Img = loadImage("Images/monster4.png");
  monster5Img = loadImage("Images/monster5.png");
  monster6Img = loadImage("Images/monster6.png");

  wall1Img = loadImage("Images/wall1.png");
  wall2Img = loadImage("Images/wall2.png");
  wall3Img = loadImage("Images/wall3.png");
  wall4Img = loadImage("Images/wall4.png");

}

function setup(){

  createCanvas(500,700);

  backgroundSprite = createSprite(250,350,500,700);
  backgroundSprite.addImage(backgroundImg);
  backgroundSprite.velocityY = 3;

  randomDoodle();

}

function draw(){

  background("lavender");
  drawSprites();

  if(backgroundSprite.y > 400){
    backgroundSprite.y = 300;
  }

  spawnWalls();

}

function randomDoodle(){

  doodle = createSprite(250,-450,50,50);
  doodle.scale = 0.3;
  doodle.velocityY = 10;
  var rand = Math.round(random(1,5));
  switch(rand){

    case 1 : doodle.addImage(doodle1Img);
    break;
    case 2 : doodle.addImage(doodle2Img);
    break;
    case 3 : doodle.addImage(doodle3Img);
    break;
    case 4 : doodle.addImage(doodle4Img);
    break;
    case 5 : doodle.addImage(doodle5Img);
    break;

  }

}

function spawnWalls(){

  if(frameCount % 15 === 0){

    wall = createSprite(random(0,500),-20);
    wall.scale = 2;
    wall.velocityY = 3;
    wall.lifetime = 285;
    var rand = Math.round(random(1,4));
    switch(rand){

      case 1 : wall.addImage(wall1Img);
      break;
      case 2 : wall.addImage(wall2Img);
      break;
      case 3 : wall.addImage(wall3Img);
      break;
      case 4 : wall.addImage(wall4Img);
      break;

    }

  }

}

