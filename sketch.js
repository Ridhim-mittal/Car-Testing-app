var car,wall;

var speed,weight;






var car,wall;

var speed,weight;






function setup() {
  createCanvas(1200,400);

  
 car = createSprite(10,200,40,40);
 car.shapeColor ="white";

 wall = createSprite(1150,200,50,300);
 wall.shapeColor = "brown";

 speed = random(50,90);

 weight = random(400,1500);

 
}

function draw() {
  background("black"); 
  
  car.velocityX = speed/2;


  if(wall.x - car.x < car.width/2 + wall.width/2){


    car.velocityX = 0;
     var deformation = 0.5*weight*speed*speed/22500;
     
    if(deformation > 180){
    car.shapeColor = "red";
      }

    if (deformation<180 && deformation>80  ){

    car.shapeColor = "orange";  

    }  

    if(deformation < 80){

      car.shapeColor = "lightgreen";
    }
  
}

drawSprites();

} 