var logo, l ; 

function setup() {

  createCanvas(600,500);

  gr = createSprite(600, 480, 1200, 40);
//1200
 
}




function draw() {

  background("lightblue");  
  
   gr.shapeColor = "lightgreen";
    

    
  //main
  //fill("yellow");
  //rect(200,250,200,250);
  
  //rgt
  fill("yellow");
  rect(100,100,100,700);
  
  //lft
  fill("yellow");
  rect(400,100,100,700);

  //w rgt
  fill("blue");
  rect(113,120,75,300);

 //w lft
 fill("blue");
 rect(413,120,75,300);



 drawSprites();

 textSize(15);
 fill("red");
 text("Lord Daniel Rules!!!!",225,275);


}