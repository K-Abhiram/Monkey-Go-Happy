//Global Variables
var bananaImage,obstacleImage,obstacleGroup,backImage,score,monkeyAnimation,groundImg;


function preload(){
  backImage=loadImage("jungle");
  monkeyAnimation=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage=loadImage("Banana.png");
  obstacleImage=loadImage("stone.png");
  
  
}


function setup() {
  createCanvas(600,300);
  
}


function draw(){
 background(255); 
}