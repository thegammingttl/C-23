const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box_1, box_2;
var ground

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    // Creating The Box
    box_1 = new Box ( 200,100,50,50)
    box_2 = new Box (220,50,40,100) 
   
    ground = new Ground (200,390,400,20)
}
 
function draw(){
    background(0);
    Engine.update(engine);
    box_1.display()
    box_2.display()
    ground.display()
    }
