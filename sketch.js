let nodeCollection = [];
let totalNodes = 80;

function setup() {
  createCanvas(700, 700);
  background(0);
  frameRate(5);
  
  for(let a=0; a<totalNodes; a++) {
    nodeCollection.push(new Traveller(random(400), random(400)));
  }
}

function draw() {
  for(let a=0; a<totalNodes; a++) {
    nodeCollection[a].walk();
  }
}