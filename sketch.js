const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, gameState,engine, world,dustbin,paper;
function setup() {
  createCanvas(1200, 450);
  background("211,211,211");

  rectMode(CENTER);

  gameState = "play";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(1000, 390, 200, 20);
  paper = new Paper(100, 300, 15);

  ground = createSprite(width / 2, 400, width, 10);
  ground.shapeColor= ("211,211,211");

  ground = Bodies.rectangle(width / 2, 400, width, 10, { isStatic: true});
  World.add(world, ground);

}

function draw() {
  if (gameState === "play") {
    rectMode(CENTER);
    background(0);
    dustbin.display();
    paper.display();

  }
}


function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 55,
      y: -35
    });
  }
}
