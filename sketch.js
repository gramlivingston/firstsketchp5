let block1;
panel = [];
panel2 = [];
panel3 = [];

//Front Panels
panel5 = [];
panel6 = [];
panel7 = [];
panel8 = [];


/*
38, 31, 187, 30, 150, 263, 30, 150
46, 200, 80, 180, 90, 500, 60, 190
600, 600, 810, 590, 750, 763, 300, 800
*/


function setup() {
    createCanvas(windowWidth, windowHeight);
    block1 = new Block(38, 31, 187, 30, 150, 263, 30, 150, 46, 200, 80, 180, 90, 500, 60, 190, 600, 600, 810, 590, 750, 763, 300, 800);
  //  crown1 = new Crown(38, 31,187,30);
    //angleMode(DEGREES);
    // caps[0] = new quad(38, 31, 86, 20, 69, 63, 30, 76);
   // caps[1] = new quad(100, 100, 110, 110, 90, 63, 60, 34);
    
}
  



function draw() {

    background(255,0,0);
    block1.move();
    block1.show();
    
}


class Block {
  constructor(x1, y1, x2, y2, x3, y3, x4, y4, mx1, my1, mx2, my2, mx3, my3, mx4, my4, bx1, by1, bx2, by2, bx3, by3, bx4, by4){
    //Top Quaderlateral
    this.x1 = x1;
    this.y1 = y1; 
    this.x2 = x2; 
    this.y2 = y2; 
    this.x3 = x3;
    this.y3 = y3;
    this.x4 = x4; 
    this.y4 = y4;
    this.topSpeed = 3;

    //Middle Quaderlateral
    this.mx1 = mx1;
    this.my1 = my1; 
    this.mx2 = mx2; 
    this.my2 = my2; 
    this.mx3 = mx3;
    this.my3 = my3;
    this.mx4 = mx4; 
    this.my4 = my4;
    this.midSpeed = 3.5;
    
    //Bottom Quaderlateral
    this.bx1 = bx1; 
    this.by1 = by1; 
    this.bx2 = bx2;
    this.by2 = by2; 
    this.bx3 = bx3;
    this.by3 = by3; 
    this.bx4 = bx4; 
    this.by4 = by4;
    this.bottomSpeed = 6;

    //crown Points
    this.flumeOneAnchor = [];
    this.flumeOne = [];

    //sidePanels Back
    this.curve1 = [];
    this.curve2 = [];
    this.curve3 = [];
    this.curve4 = [];
    
    //sidePanels Back
    this.curve5 = [];
    this.curve6 = [];
    this.curve7 = [];
    this.curve8 = [];

  }

  move() {

   //Moves top box
   this.x1 = this.x1 + (random(-this.topSpeed,this.topSpeed)); 
   this.y1 = this.y1 + (random(-this.topSpeed,this.topSpeed)); 
   this.x2 = this.x2 + (random(-this.topSpeed,this.topSpeed));
   this.y2 = this.y2 + (random(-this.topSpeed,this.topSpeed));
   this.x3 = this.x3 + (random(-this.topSpeed,this.topSpeed));
   this.y3 = this.y3 + (random(-this.topSpeed,this.topSpeed));
   this.x4 = this.x4 + (random(-this.topSpeed,this.topSpeed));
   this.y4 = this.y4 + (random(-this.topSpeed,this.topSpeed));

    //Moves middle section
    this.mx1 = this.mx1 + (random(-this.midSpeed,this.midSpeed)); 
    this.my1 = this.my1 + (random(-this.midSpeed,this.midSpeed)); 
    this.mx2 = this.mx2 + (random(-this.midSpeed,this.midSpeed));
    this.my2 = this.my2 + (random(-this.midSpeed,this.midSpeed));
    this.mx3 = this.mx3 + (random(-this.midSpeed,this.midSpeed));
    this.my3 = this.my3 + (random(-this.midSpeed,this.midSpeed));
    this.mx4 = this.mx4 + (random(-this.midSpeed,this.midSpeed));
    this.my4 = this.my4 + (random(-this.midSpeed,this.midSpeed));

    //Moves bottom box
    this.bx1 = this.bx1 + (random(-this.bottomSpeed,this.bottomSpeed)); 
    this.by1 = this.by1 + (random(-this.bottomSpeed,this.bottomSpeed)); 
    this.bx2 = this.bx2 + (random(-this.bottomSpeed,this.bottomSpeed));
    this.by2 = this.by2 + (random(-this.bottomSpeed,this.bottomSpeed));
    this.bx3 = this.bx3 + (random(-this.bottomSpeed,this.bottomSpeed));
    this.by3 = this.by3 + (random(-this.bottomSpeed,this.bottomSpeed));
    this.bx4 = this.bx4 + (random(-this.bottomSpeed,this.bottomSpeed));
    this.by4 = this.by4 + (random(-this.bottomSpeed,this.bottomSpeed));

    //Make the crown --Still need to make all 4 posts and set or just about their magnitude make it a for loop
    this.flumeOneAnchor = [((this.x1+this.x2)/2),  ((this.y1+this.y2)/2)];
    
    let m1 = -1/((this.y2-this.y1)/(this.x2-this.x1));
    let b1 = ((this.flumeOneAnchor[1])-(m1*this.flumeOneAnchor[0]));

    this.flumeOne[1] = m1*(this.flumeOneAnchor[0]+20) + b1;
    this.flumeOne[0] = (this.flumeOneAnchor[0]+20);

    
    /* REMEMBER THIS WORKS WELL!!!
    this.curve1 = new Array (this.x1, this.y1, this.x2, this.y2, this.bx2, this.by2, this.bx1, this.by1);
    this.curve2 = new Array (this.x2, this.y2, this.x3, this.y3, this.bx3, this.by3, this.bx2, this.by2);
    this.curve3 = new Array (this.x3, this.y3, this.x4, this.y4, this.bx4, this.by4, this.bx3, this.by3);
    this.curve4 = new Array(this.x4, this.y4, this.x1, this.y1, this.bx1, this.by1, this.bx4, this.by4); */ 

    //Top to mid
    this.curve1 = new Array (this.x1, this.y1, this.x2, this.y2, this.mx2, this.my2, this.mx1, this.my1);
    this.curve2 = new Array (this.x2, this.y2, this.x3, this.y3, this.mx3, this.my3, this.mx2, this.my2);
    this.curve3 = new Array (this.x3, this.y3, this.x4, this.y4, this.mx4, this.my4, this.mx3, this.my3);
    this.curve4 = new Array (this.x4, this.y4, this.x1, this.y1, this.mx1, this.my1, this.mx4, this.my4);

    //mid to bottom
    this.curve5 = new Array (this.mx1, this.my1, this.mx2, this.my2, this.bx2, this.by2, this.bx1, this.by1);
    this.curve6 = new Array (this.mx2, this.my2, this.mx3, this.my3, this.bx3, this.by3, this.bx2, this.by2);
    this.curve7 = new Array (this.mx3, this.my3, this.mx4, this.my4, this.bx4, this.by4, this.bx3, this.by3);
    this.curve8 = new Array (this.mx4, this.my4, this.mx1, this.my1, this.bx1, this.by1, this.bx4, this.by4);




    //Connects the top and middle
    
    let density = 40;
    for (let j = 1; j <= density ; j++) {    
      let thinX1 = lerp(Math.round(this.curve1[0]), Math.round(this.curve2[0]), j/density);
      let thinY1 = lerp(Math.round(this.curve1[1]), Math.round(this.curve2[1]), j/density);
      let thinX2 = lerp(Math.round(this.curve1[2]), Math.round(this.curve2[2]), j/density);
      let thinY2 = lerp(Math.round(this.curve1[3]), Math.round(this.curve2[3]), j/density);
      let thinX3 = lerp(Math.round(this.curve1[4]), Math.round(this.curve2[4]), j/density);
      let thinY3 = lerp(Math.round(this.curve1[5]), Math.round(this.curve2[5]), j/density);
      let thinx4 = lerp(Math.round(this.curve1[6]), Math.round(this.curve2[6]), j/density);
      let thinY4 = lerp(Math.round(this.curve1[7]), Math.round(this.curve2[7]), j/density);
      
      panel.push(bezier(thinX1,thinY1,thinX2,thinY2,thinX3,thinY3,thinx4,thinY4));

    }

    for (let j = 1; j <= density ; j++) {    
      let thinX1 = lerp(Math.round(this.curve2[0]), Math.round(this.curve3[0]), j/density);
      let thinY1 = lerp(Math.round(this.curve2[1]), Math.round(this.curve3[1]), j/density);
      let thinX2 = lerp(Math.round(this.curve2[2]), Math.round(this.curve3[2]), j/density);
      let thinY2 = lerp(Math.round(this.curve2[3]), Math.round(this.curve3[3]), j/density);
      let thinX3 = lerp(Math.round(this.curve2[4]), Math.round(this.curve3[4]), j/density);
      let thinY3 = lerp(Math.round(this.curve2[5]), Math.round(this.curve3[5]), j/density);
      let thinx4 = lerp(Math.round(this.curve2[6]), Math.round(this.curve3[6]), j/density);
      let thinY4 = lerp(Math.round(this.curve2[7]), Math.round(this.curve3[7]), j/density);
      
      panel2.push(bezier(thinX1,thinY1,thinX2,thinY2,thinX3,thinY3,thinx4,thinY4));

    }

    for (let j = 1; j <= density ; j++) {    
      let thinX1 = lerp(Math.round(this.curve3[0]), Math.round(this.curve4[0]), j/density);
      let thinY1 = lerp(Math.round(this.curve3[1]), Math.round(this.curve4[1]), j/density);
      let thinX2 = lerp(Math.round(this.curve3[2]), Math.round(this.curve4[2]), j/density);
      let thinY2 = lerp(Math.round(this.curve3[3]), Math.round(this.curve4[3]), j/density);
      let thinX3 = lerp(Math.round(this.curve3[4]), Math.round(this.curve4[4]), j/density);
      let thinY3 = lerp(Math.round(this.curve3[5]), Math.round(this.curve4[5]), j/density);
      let thinx4 = lerp(Math.round(this.curve3[6]), Math.round(this.curve4[6]), j/density);
      let thinY4 = lerp(Math.round(this.curve3[7]), Math.round(this.curve4[7]), j/density);
      
      panel3.push(bezier(thinX1,thinY1,thinX2,thinY2,thinX3,thinY3,thinx4,thinY4));

    }

    //connects the middle to the bottom

    let densityFront = 60;
    for (let j = 1; j <= density ; j++) {    
      let thinX1 = lerp(Math.round(this.curve5[0]), Math.round(this.curve6[0]), j/densityFront);
      let thinY1 = lerp(Math.round(this.curve5[1]), Math.round(this.curve6[1]), j/densityFront);
      let thinX2 = lerp(Math.round(this.curve5[2]), Math.round(this.curve6[2]), j/densityFront);
      let thinY2 = lerp(Math.round(this.curve5[3]), Math.round(this.curve6[3]), j/densityFront);
      let thinX3 = lerp(Math.round(this.curve5[4]), Math.round(this.curve6[4]), j/densityFront);
      let thinY3 = lerp(Math.round(this.curve5[5]), Math.round(this.curve6[5]), j/densityFront);
      let thinx4 = lerp(Math.round(this.curve5[6]), Math.round(this.curve6[6]), j/densityFront);
      let thinY4 = lerp(Math.round(this.curve5[7]), Math.round(this.curve6[7]), j/densityFront);
      
      panel5.push(bezier(thinX1,thinY1,thinX2,thinY2,thinX3,thinY3,thinx4,thinY4));

    }

    for (let j = 1; j <= density ; j++) {    
      let thinX1 = lerp(Math.round(this.curve6[0]), Math.round(this.curve7[0]), j/densityFront);
      let thinY1 = lerp(Math.round(this.curve6[1]), Math.round(this.curve7[1]), j/densityFront);
      let thinX2 = lerp(Math.round(this.curve6[2]), Math.round(this.curve7[2]), j/densityFront);
      let thinY2 = lerp(Math.round(this.curve6[3]), Math.round(this.curve7[3]), j/densityFront);
      let thinX3 = lerp(Math.round(this.curve6[4]), Math.round(this.curve7[4]), j/densityFront);
      let thinY3 = lerp(Math.round(this.curve6[5]), Math.round(this.curve7[5]), j/densityFront);
      let thinx4 = lerp(Math.round(this.curve6[6]), Math.round(this.curve7[6]), j/densityFront);
      let thinY4 = lerp(Math.round(this.curve6[7]), Math.round(this.curve7[7]), j/densityFront);
      
      panel6.push(bezier(thinX1,thinY1,thinX2,thinY2,thinX3,thinY3,thinx4,thinY4));

    }

    for (let j = 1; j <= density ; j++) {    
      let thinX1 = lerp(Math.round(this.curve7[0]), Math.round(this.curve8[0]), j/densityFront);
      let thinY1 = lerp(Math.round(this.curve7[1]), Math.round(this.curve8[1]), j/densityFront);
      let thinX2 = lerp(Math.round(this.curve7[2]), Math.round(this.curve8[2]), j/densityFront);
      let thinY2 = lerp(Math.round(this.curve7[3]), Math.round(this.curve8[3]), j/densityFront);
      let thinX3 = lerp(Math.round(this.curve7[4]), Math.round(this.curve8[4]), j/densityFront);
      let thinY3 = lerp(Math.round(this.curve7[5]), Math.round(this.curve8[5]), j/densityFront);
      let thinx4 = lerp(Math.round(this.curve7[6]), Math.round(this.curve8[6]), j/densityFront);
      let thinY4 = lerp(Math.round(this.curve7[7]), Math.round(this.curve8[7]), j/densityFront);
      
      panel7.push(bezier(thinX1,thinY1,thinX2,thinY2,thinX3,thinY3,thinx4,thinY4));

    }

    for (let j = 1; j <= density ; j++) {    
      let thinX1 = lerp(Math.round(this.curve8[0]), Math.round(this.curve5[0]), j/densityFront);
      let thinY1 = lerp(Math.round(this.curve8[1]), Math.round(this.curve5[1]), j/densityFront);
      let thinX2 = lerp(Math.round(this.curve8[2]), Math.round(this.curve5[2]), j/densityFront);
      let thinY2 = lerp(Math.round(this.curve8[3]), Math.round(this.curve5[3]), j/densityFront);
      let thinX3 = lerp(Math.round(this.curve8[4]), Math.round(this.curve5[4]), j/densityFront);
      let thinY3 = lerp(Math.round(this.curve8[5]), Math.round(this.curve5[5]), j/densityFront);
      let thinx4 = lerp(Math.round(this.curve8[6]), Math.round(this.curve5[6]), j/densityFront);
      let thinY4 = lerp(Math.round(this.curve8[7]), Math.round(this.curve5[7]), j/densityFront);
      
      panel8.push(bezier(thinX1,thinY1,thinX2,thinY2,thinX3,thinY3,thinx4,thinY4));

    }
    
  }




  show() {

    //Top
    stroke(255);
    strokeWeight(1);
    fill(200,200,0,0.4);
    noFill();
    quad(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
    
    //Midle
    stroke(50,50,255,0.4);
    strokeWeight(0.80);
    quad(this.mx1, this.my1, this.mx2, this.my2, this.mx3, this.my3, this.mx4, this.my4);

    //Bottom
    stroke(255,0.8);
    strokeWeight(1);
    fill(150,200,0,0.7);
    quad(this.bx1, this.by1, this.bx2, this.by2, this.bx3, this.by3, this.bx4, this.by4); 


    //First Panel
    strokeWeight(1);
    bezier(this.curve1[0],this.curve1[1],this.curve1[2],this.curve1[3],this.curve1[4],this.curve1[5],this.curve1[6],this.curve1[7]);
    
    stroke(200);
    strokeWeight(0.5);

    for (let i = 0; i < panel.length; i++) {
      
      stroke(200);
      strokeWeight(0.5);
      return panel[i];

    }

    //Second Panel
    bezier(this.curve2[0],this.curve2[1],this.curve2[2],this.curve2[3],this.curve2[4],this.curve2[5],this.curve2[6],this.curve2[7]);
    for (let i = 0; i < panel2.length; i++) {
      
      stroke(200);
      strokeWeight(0.5);
      return panel2[i];

    }

    
    //Third Panel
    bezier(this.curve3[0],this.curve3[1],this.curve3[2],this.curve3[3],this.curve3[4],this.curve3[5],this.curve3[6],this.curve3[7]);
    for (let i = 0; i < panel3.length; i++) {
      
      stroke(200);
      strokeWeight(0.5);
      return panel3[i];

    }

      //Fifth Panel
      bezier(this.curve5[0],this.curve5[1],this.curve5[2],this.curve5[3],this.curve5[4],this.curve5[5],this.curve5[6],this.curve5[7]);
      for (let i = 0; i < panel5.length; i++) {
        
        stroke(200);
        strokeWeight(0.5);
        return panel5[i];
  
      }

      //Sixth Panel
      bezier(this.curve6[0],this.curve6[1],this.curve6[2],this.curve6[3],this.curve6[4],this.curve6[5],this.curve6[6],this.curve6[7]);
      for (let i = 0; i < panel6.length; i++) {
        
        stroke(200);
        strokeWeight(0.5);
        return panel6[i];
  
      }

      //Seventh Panel
      bezier(this.curve7[0],this.curve7[1],this.curve7[2],this.curve7[3],this.curve7[4],this.curve7[5],this.curve7[6],this.curve7[7]);
      for (let i = 0; i < panel7.length; i++) {
        
        stroke(200);
        strokeWeight(0.5);
        return panel7[i];
  
      }

      //Eighth Panel
      bezier(this.curve8[0],this.curve8[1],this.curve8[2],this.curve8[3],this.curve8[4],this.curve8[5],this.curve8[6],this.curve8[7]);
      for (let i = 0; i < panel8.length; i++) {
        
        stroke(200);
        strokeWeight(0.5);
        return panel8[i];
  
      }

 

    stroke(2);
    strokeWeight(1);
   // line(30,m2*30+b2,this.x1,m2*(this.x1)+b2); //two points (x2,y2) and (x1,m2(x1)+b2)
    //console.log(this.flumeOneAnchor, this.flumeOne);
    line(this.flumeOneAnchor[0], this.flumeOneAnchor[1], this.flumeOne[0], this.flumeOne[1]);
/*
    //flume point
    if (this.x1 < this.x2){
      strokeWeight(4);
      stroke(100);
      line(((this.x1+this.x2)/2),  ((this.y1+this.y2)/2), this.v1.x, this.v1.y)


       circle(this.x2, this.y2, 20);
      circle(((this.x1+this.x2)/2), ((this.y1+this.y2)/2), 20);
      translate(((this.x1+this.x2)/2), ((this.y1+this.y2)/2));
      strokeWeight(4);
      stroke(100);
      rotate(90);
      line(0, 0, this.x1, this.y1);
               m1 = (this.y2-this.y1)/(this.x2-this.x1);
        m2 = -1/(m1);
        b2 = ((this.y1 + this.y2)/2)-(((this.x1 + this.x2)/2)*m2)
*/
    }
    //showPanel(){
      //panelOne = [];


    //}



  }


