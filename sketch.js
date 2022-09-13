const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide,bottomSide;
var world;
var radius = 70;
var dustbinImg,paperImg

var death=0
var score=0
var win=0

function preload(){
//find the bug in the below code
	dustbinImg = loadImage("dustbin.png");
	paperImg = loadImage("paper.png");

}


function setup() {
	createCanvas(1536, windowHeight);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		density:0.4
	}

	ball = Bodies.circle(260,100,radius/2.6,ball_options);
	World.add(world,ball);

	ground=new Ground(260,670,100,20);
	leftSide = new Ground(1100,570,10,180);
	rightSide = new Ground(1270,570,10,180);
	bottomSide = new Ground(1185,650,150,20);
	q=new Ground(10,height/2,20,height)
	w=new Ground(1525,height/2,20,height)
    e=new Ground(width/2,10,width,20)
	 
	Engine.run(engine);
    
	
}


function draw() {
	background("white");
	rectMode(CENTER);

	textSize(30)
	fill("red")
	text("Deaths:"+death,100,50)

	textSize(30)
	fill("red")
	text("Wins:"+win,1350,50)
	
	textSize(30)
	fill("red")
	text("Time:"+score,700,50)
    
    if(ball.position.y>670){
		image(paperImg,ball.position.x,ball.position.y,radius,radius);
		death=death+1
	}

	
	if(ball.position.x>1185 && ball.position.y>650){
		win=win+1
	}
    

    


	e.display()
    w.display()
    q.display()
	ground.display();
	leftSide.display();  
	rightSide.display();
	bottomSide.display();
	
	imageMode(CENTER);
	//use image() command to add paper image to the ball
image(paperImg,ball.position.x,ball.position.y,radius,radius);

// use image() command to add dustbin image in the canvas.
image(dustbinImg,1185, 570, 200,200);





}

function keyPressed() {
  	if (keyCode === RIGHT_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:35,y:-40});
		score = score + Math.round(getFrameRate()/90);
    
  	}
	  if (keyCode === LEFT_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:-35,y:-30});
		score = score + Math.round(getFrameRate()/90);
    
  	} 
}
	
