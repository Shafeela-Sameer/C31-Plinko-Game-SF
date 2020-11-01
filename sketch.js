const Engine=Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;



var engine ,world;
var ground;

var particles=[];
var plinkoline=[];
var divisions= [];

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(480,800);
  engine= Engine.create();
  world =engine.world;

  ground = new Ground(240,height,480,20);

// creating vertical divisions using array .push()
  for (var k =0; k<=width;k= k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
      }

// first row of plinkos
  for (var j =0; j<=width;j= j+50){
    plinkoline.push(new Plinko(j,75));
     }

  //second row of plinkos
  for (var j =5; j<=width;j= j+50){
    plinkoline.push(new Plinko(j,175));
      }


// third row of plinkos
  for (var j =5; j<=width;j= j+50){
    plinkoline.push(new Plinko(j,275));
     }

// fourth row of plinkos
  for (var j =5; j<=width;j= j+50){
    plinkoline.push(new Plinko(j,375));
    }


}

function draw() {
  background("black");  
  Engine.update(engine);

 // displaying ground
  ground.display();
  

  // creating particles every 60 frames such that it falls a random distnce away from center in x direction 

if (frameCount % 60=== 0){

  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
console.log(frameCount);
  }
// displaying vertical divisions
  for (var k=0; k<divisions.length ; k++){
    divisions[k].display();

  }
 // displaying all rows of plinkos
  for (var i =0; i< plinkoline.length;i++){
    plinkoline[i].display();
    }

// displaying falling particles 

for (var p=0; p<particles.length ; p++){
  particles[p].display();

}
  drawSprites();

 
}