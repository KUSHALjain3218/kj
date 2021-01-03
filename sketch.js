
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	tree = new Tree(800,500,30,150);
	boy = new Boy(400,730,30,150);
  stone= new Stone(100,100);
  mango=new Mango(800,400,10,10);
  mango2=new Mango(860,420,10,10);
  mango3=new Mango(780,340,10,10);
  mango4=new Mango(780,300,10,10);
  mango5=new Mango(720,300,10,10);
	sling = new SlingShot(stone.body,{x:600,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  ground.display();
  tree.display();
  boy.display();
  sling.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  drawSprites();
 
}

function mouseDragged() {
    console.log("hello");
    Matter.Body.setPosition(stone.body,{x: mouseX , y: mouseY})

  }
  function mouseReleased() {
    console.log("event");
    sling.fly();


  }

