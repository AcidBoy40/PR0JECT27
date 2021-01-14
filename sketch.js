
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof1,roof2;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(550,350,50);
	bob2 = new Bob(600,350,50);
	bob3 = new Bob(650,350,50);
	bob4 = new Bob(700,350,50);
	bob5 = new Bob(750,350,50);
	roof1 = new Roof(650,650,1000,20);
	roof2 = new Roof(650,250,400,20);
	rope1 = new Rope(bob1.body,{x:550,y:260});
	rope2 = new Rope(bob2.body,{x:590,y:260});
	rope3 = new Rope(bob3.body,{x:630,y:260});
	rope4 = new Rope(bob4.body,{x:670,y:260});
	rope5 = new Rope(bob5.body,{x:710,y:260});
	//angry bird rope class
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  roof2.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}

