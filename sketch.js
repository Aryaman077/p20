var car,wall; 
var speed,weight;
function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(800,200,60,height/2); 
 // wall.shapeColor=color(80,80,80);
wall.shapeColor="red";

  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;
  car.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  

  if(wall.x-car.x < car.width/2 + wall.width/2){
    var deformation = 0.5*speed*speed*weight/22500;
    car.velocityX = 0;

    if(deformation <100){
      car.shapeColor = color(0,225,0);
    }
    if(deformation >180 ){
      car.shapeColor = color(255,0,0);
    }
    s
    if(deformation >100 && deformation <180){
      car.shapeColor = color(230,235,0);
    }
  }
  

  drawSprites();
}