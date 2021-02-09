
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  

	//Create the Bodies Here.
	paper1=new paper(30,585,30)
dustbin1 =new dustbin(600,600,180,20)
dustbin2=new dustbin(510,550,20,120)
dustbin3=new dustbin(680,550,20,120)
ground1=new ground(400,620,800,10)



	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  paper1.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  ground1.display()
 
  drawSprites();
}
function keypressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:10,y:-10})
  }
}
