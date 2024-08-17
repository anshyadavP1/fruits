class Traveller {
  constructor(x, y) {
    console.log("Hello!");
    
    this.step = 5;
    this.x = x;
    this.y = y;
    this.color = random(['red', 'yellow', 'orange', 'purple', 'green', 'indigo', 'lightblue', 'white']);
    
    
    strokeWeight(5);
    this.walk();
  }
  
  walk() {
    stroke(this.color);
    let variationX = random([-1, 1]);
    let variationY = random([-1, 1]);
        
    this.x += this.step * variationX;
    this.y += this.step * variationY;
    
    point(this.x, this.y);
  }  
  
}