var a, b;

function setup() {
  createCanvas(800,400);
  a= createSprite(100, 100, 50, 50);
  a.shapeColor="green";
  a.debug=true;

  b= createSprite(200, 100, 50, 50);
  b.shapeColor="green";
  b.debug=true;

  c= createSprite(300, 100, 50, 50);
  c.shapeColor="green";
  c.debug=true;

  d= createSprite(400, 100, 50, 50);
  d.shapeColor="green";
  d.debug=true; 
}

function isTouchingD(o1,o2){
  if(o2.x-o1.x<o2.width/2+o1.width/2&&o1.x-o2.x<o2.width/2+o1.width/2&&o2.y-o1.y<o2.width/2+o1.width/2&&o1.y-o2.y<o2.width/2+o1.width/2){
    return true;
  }
else{
 return false;
}
}

function draw() {
  background("pink");

  b.x=mouseX;
  b.y=mouseY;
  console.log(b.x-a.x) ; 

  if(isTouchingD(a,b)){
    a.shapeColor="red";
    b.shapeColor="red";
  }
  else{
    a.shapeColor="green"
    b.shapeColor="green"
  } 
  if(isTouchingD(c,b)){
    c.shapeColor="red";
    b.shapeColor="red";
  }
  else{
    c.shapeColor="green"
    b.shapeColor="green"
  }  

  if(isTouchingD(d,b)){
    d.shapeColor="red";
    b.shapeColor="red";
  }
  else{
    d.shapeColor="green"
    b.shapeColor="green"
  }  
  drawSprites();
}