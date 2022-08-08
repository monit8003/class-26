
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
let engine;
let world;

var ground;

var top_wall;
var ball;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(hForce);
  
   
  
  

  ground =new Ground(200,390,400,20);


  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
  
  pendulum=Constraint.create({
  pointA:{x:200,y:200},
  bodyB:ball,
  pointB:{x:0,y:0},
  stiffness:0.1,
  length:120 
  })
  World.add(world,pendulum)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
push()
strokeWeight(5)  
stroke("red") 
line(pendulum.pointA.x,pendulum.pointA.y,ball.position.x,ball.position.y)
pop()
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  
  Engine.update(engine);
}


function hForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.04,y:0});
}
  


