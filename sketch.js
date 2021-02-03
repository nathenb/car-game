
var car ,wall
var speed,weight



function setup() {
  createCanvas(1600,400);

 speed=ramdom(55,90)
 weight=ramdom(400,1500)  
 
 car.velocityX=speed;

 car=createSprite(50,200,50,50)
 car . shapecolour(255)
 wall=createSprite(1500,200,60,hight/2)
 wall . shapecolour(80,80,80)

}

function draw() {
  background('black');  

  if(wall.x-car.x &lt; (car.width+wall.width)/2)
  {
  car.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22500;
  if(deformation&gt;180)
  {
  car.shapeColor=color(255,0,0);
  }
  if(deformation&lt;180 &amp;&amp; deformation&gt;100)
  {
  car.shapeColor=color(230,230,0);
  }
  if(deformation&lt;100)
  {
  car.shapeColor=color(0,255,0);
  }
  }










  drawSprites();
}