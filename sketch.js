function setup() {
  createCanvas(windowWidth/2, windowHeight/2);
  x = 0;
  y = 0;
  rectMode(CENTER);
  background(0);
  //blendMode(LIGHTEST);
  noLoop();
  farb = random();

}

function draw() {
  for(h = 0; h < height / 5; h ++){
    
  oneRowRects();

  }
 
   bigCirc();
  texturee();
  
 
  
}



function oneRowRects() {
  if(farb < 0.5){
  for(i = 0; i <= width / 10; i++){
    if(x > width * (1 / 3) && x < width * (2 / 3)){
      fill(random(0,255));
     rect(x, y, 5, 5);
    x = x + 5;}
    else {

      fill(random(140, 255), random(0,255), random(140,255));
    
     rect(x, y, 10, 10);
    x = x + 10;
    }
  }
  if(x >= width){
    i = 0;
    x = 0;
    y = y + 10;
  }
  }
  else {
    
    for(i = 0; i <= width / 10; i++){
    if(x > width * (1 / 3) && x < width * (2 / 3)){
      fill(random(140, 255), random(0,255), random(140,255));
     rect(x, y, 5, 5);
    x = x + 5;}
    else {

      fill(random(0,255));
    
     rect(x, y, 10, 10);
    x = x + 10;
    }
  }
  if(x >= width){
    i = 0;
    x = 0;
    y = y + 10;
  }
    
  }
  
}

function texturee(){
  strokeWeight(1);
  for (c = 0; c < 1; c++) {
    for (d = 0; d < 6; d++) {
      stroke(0);
      for (x1 = 1; x1 < width; x1++) {
        for (y1 = 0; y1 < height; y1++) {
          var n = noise(x1 * 0.02, y1 * 0.02);
          if (random(1) > 0.9 - 0.01 * d - n / 5) {
            strokeWeight(
              random(
                0.2 + y1 / 4000  - n / 10 ,
                0.3 + y1 / 4000  - n / 10 - c/5
              )
            );

            point(x1 + (c)*(width)/5 + random(-2, 2), y1 + random(-3, 3));
          }
        }
      }
    }
  }
  //noLoop();
}

function bigCirc() {

  for(l = 0; l < 500; l++){
   let x2 = random(20, width);
   let y2 = random(20, height);
    var m = noise(l);
    if(farb < 0.5 && x2 < width * (1 / 3)){
    fill(random(0, 255), random(0,76), random(90,220));
    //fill(m*255, m*20, m*10); dunkelrot
    
    circle(x2, y2, 10 / m);}
    
    else if(farb < 0.5 && x2 > width * (2 / 3)){
       fill(random(0, 255), random(0,76), random(90,220));
    //fill(m*255, m*20, m*10); dunkelrot
    
    circle(x2, y2, 10 / m);}
    
    else{
         fill(random(0, 255));
    //fill(m*255, m*20, m*10); dunkelrot
    
    circle(x2, y2, 10 / m);}
    
    if(farb > 0.5 && x2 > width * (2 / 3)){
         fill(random(0, 255));
    //fill(m*255, m*20, m*10); dunkelrot
    
    circle(x2, y2, 10 / m);}
    
     else if(farb > 0.5 && x2 < width * (1 / 3)){
         fill(random(0, 255));
    //fill(m*255, m*20, m*10); dunkelrot
    
    circle(x2, y2, 10 / m);}
    
    else if(farb > 0.5 && x2 > width * (1 / 3) && x2 < width * (2 / 3)){
    fill(random(0, 255), random(0,76), random(90,220));
    //fill(m*255, m*20, m*10); dunkelrot
    
    circle(x2, y2, 10 / m);}
    
      
      
      }
    
    
      
    }
  
