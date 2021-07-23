var car,wall;

function setup() {
  createCanvas(1600,400);
 
  
  wall= createSprite(1500, 200, 60, height/2);
  car= createSprite(50, 200, 50, 50);
 
}

  function draw() {
   background("black");  

   

  drawSprites();
}

