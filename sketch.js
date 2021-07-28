var scene, sceneImg
var bow, bowImg
var arrow, arrowImg


var redBalloon, redBalloonImg
var blueBalloon, blueBalloonImg
var greenBalloon, greenBalloonImg
var pinkBalloon, pinkBalloonImg

var score = 0

function preload(){
  
  //Loading images
  sceneImg = loadImage("background0.png");
  arrowImg = loadImage("arrow0.png");
  bowImg = loadImage("bow0.png");
  redBalloonImg = loadImage("red_balloon0.png");
  blueBalloonImg = loadImage("blue_balloon0.png");
  greenBalloonImg = loadImage("green_balloon0.png");
  pinkBalloonImg = loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(sceneImg);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImg); 
  bow.scale = 1;

  //Creating groups 
  redB = createGroup();
  greenB = createGroup();
  blueB = createGroup();
  pinkB = createGroup();
  arrowGroup = createGroup();

  //Destroy balloons when touched
  if(arrowGroup.isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
      score=score+1
  }

  if(arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
      score=score+1
  }

  if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
      score=score+1
  }

  if(arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
      score=score+1
  }
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("SPACE")) {
    createArrow();
    
  }
  
  textSize(20);
  //creating random,continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if(select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  drawSprites();
  text("Score: "+ score, 270,30);
}

// Creating  arrows for bow
 function createArrow() {
  var arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

//Creating red, blue, green & pink balloons
function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(redBalloonImg);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blueBalloonImg);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;

}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(greenBalloonImg);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pinkBalloonImg);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 0.1;
}
