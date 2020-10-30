var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,bottom,side1,side2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	side1=createSprite(490,620,20,100)
	side2=createSprite(300,620,20,100)


	engine = Engine.create();
	world = engine.world;

	

	var bottomOptions={
		isStatic:true
	}
	
	bottom=Bodies.rectangle(width/2,670,200,20,bottomOptions)
	World.add(world,bottom)
	

	var packageBodyOptions={
		restitution:0.65
		
	}

	packageBody = Bodies.circle(width/2 , 200 , 5 , packageBodyOptions);
	World.add(world, packageBody);
	
	
	//Create a Ground
	

	Engine.run(engine);
  
	console.log(packageBody)
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  ellipseMode(RADIUS)
  ellipse(packageBody.position.x,packageBody.position.y,5,5)
  
  rect(bottom.position.x,bottom.position.y,200,10)


  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	packageBody=Bodies.setStatic(packageBody,false)

    
  }
}



