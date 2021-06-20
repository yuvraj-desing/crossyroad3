var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 carAnimation1=loadAnimation("images/car1.png");
 carAnimation2=loadAnimation("images/car2.png");
 playerAnimation=loadAnimation("images/Player-03.png")
 logAnimation=loadAnimation("images/log1.png")
}

function setup() {
  
  createCanvas(1370,700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  for(var i=0;i<6;i++){
  var bottomGrass1=createSprite(683,height-50-(i*400),width,grassHeight);
  if(i%2===0)//adding road
  {
    var road=createSprite(683,height-150-(i*400)-grassHeight,width,300)
    road.shapeColor="black";
  }
bottomGrass1.shapeColor="green";
}
for(var i=0 ;i<40;i++){
  cars=new Car(2)
  carGroup1.add(cars.spt)
}
for(var i=0 ;i<40;i++){
  logs=new Log(2)
  logGroup1.add(logs.spt)
}
player=new Player(width/2,height-25);

 }

function draw() {
  background("skyblue");
 for(i=1;i<logGroup1.length;i++){
   if (logGroup1[i].x<0){
logGroup1[i].x=width
   }
 }
 for(i=1;i<carGroup1.length;i++){
  if (carGroup1[i].x<0){
carGroup1[i].x=width
  }
  if (carGroup1[i].x>width){
    carGroup1[i].x=0
      }
}
if (keyDown=UP_ARROW){
  player.velocityY=-2
}

  drawSprites();
  translate(0,-player.spt.y+height-150);
}

