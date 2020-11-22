const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var binObject;
var groundObject;
var paperObject
var world;



function setup() {
	createCanvas(800, 700);
rectMode(CENTER);

	engine = Engine.create();
	
	world = engine.world;

	//Create the Bodies Here.
	binObject=new bin(1200,650);
	groundObject=new ground(width/2, 670, width, 20);
	paperObject=new paper(200,450,40);
var render=Render.create({
	element:document.body,
	engine:engine,
	options:{
		width:1200,
		height:700,
		wireframes:false
	}
}
);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  binObject.display();
  groundObject.display();
  paperObject.display();
  drawSprites();
 
}



