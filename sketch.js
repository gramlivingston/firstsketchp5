function setup() {
    createCanvas(windowWidth, windowHeight);

}

// here im printing to the console 

x = 100;
speed = 2;
circleDim = 20;

circleDims = [10,20,100];

console.log(circleDims[2]);


  
  function draw() {
    background(255,(circleDims[2]-100),0);

    strokeWeight(4);
    stroke(0,0,255);
    fill(0,110,255);
    circle(x,200,circleDims[0]);

    strokeWeight(2);
    stroke(255,0,255);
    fill(110,255,0);
    circle(200,100,circleDims[1]);

    noFill();
    strokeWeight(1);
    stroke(0,110,255);
    circle(windowWidth/2,windowHeight/2,circleDims[2]);
    
   
    x = x + speed;
    circleDims[2] = circleDims[2] + 1;
    
    if (x >= windowWidth-(circleDim/2)){
      speed = speed*-1;
    
    }

    //console.log(circleDims[2]);

}
