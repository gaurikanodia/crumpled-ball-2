
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
paperBall = loadImage("paper.png")	
dustbin = loadImage("dustbin.png")
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(400, 580, 800,40,{isStatic:true});
	World.add(world,ground);

	var options = {
		restitution : 0.2,
		friction: 1,
		density : 2
	}

	ball = Bodies.circle(100,500,50,options)
	World.add(world,ball)

	brick1 = new Brick(600,430,100,20)
	brick2 = new Brick(680,450,20,200)
	//brick3 = new Brick(520,500,20,100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  fill("white")
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,40)

  
  fill("orange")
  imageMode(CENTER)
  image(dustbin,630,420,300,300)
  image(paperBall,ball.position.x,ball.position.y,80,80)


//   brick1.display()
//   brick2.display()
 // brick3.display()
 

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(ball,ball.position,{x:500,y:-850})
	}
}



