
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var roof1, rope1, rope2, rope3, rope4, rope5, bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

  bobDiamter = 40;
  bobX = 800;
  bobY = height/4 + 500;

  roof1 = new roof(350,100,300,30);

	bob1 = new bob(bobX - bobDiameter * 2,bobY,bobDiameter);
	bob2 = new bob(bobX - bobDiameter,bobY,bobDiameter);
	bob3 = new bob(bobX,bobY,bobDiameter);
	bob4 = new bob(bobX + bobDiameter,bobX,bobDiameter);
	bob5 = new bob(bobX + bobDiameter * 2,bobX,bobDiameter);
  
  rope1 = new rope(bob1.body,roof1.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("WHITE");

  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();

  drawSprites();
 
}



