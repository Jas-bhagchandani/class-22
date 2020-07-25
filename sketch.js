const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
var ball_options={
    restitution: 1.0
}
    ball= Bodies.circle(200,150,25,ball_options);
    World.add(world,ball);
    console.log(ball);


    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,380,400,20,ground_options);
    World.add(world,ground);

    //console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,367,400,20);

    ellipseMode(CENTER);
    ellipse(ball.position.x,ball.position.y,25,25);
}