const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;
var box1, box2;
var ground
function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  

  
   
  box1 = new Box(200,200,50,60);
  box2 = new Box(170,250,50,60);
ground = new Ground(200,390,400,20);
}

function draw() 
{
  background(0);  
  Engine.update(engine);
ground.display();
  box1.display();
  box2.display();
  
}