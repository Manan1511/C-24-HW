var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,paper1,dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	paper1 = new Paper(200,200,20);

	dustbin1 = new Dustbin(700,600,110,25);
	dustbin2 = new Dustbin(750,557.5,25,110);
	dustbin3 = new Dustbin(650,557.5,25,110);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,10);
  paper1.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-15});
	}
}



