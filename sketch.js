
var garden,garden_img
var tom , tom_img,tomImg1,tomImg2
var jerry , jerry_img1,jerryImg2,jerryImg2,jerry_Img4


function preload() {
    garden_img = loadImage("images/garden.png")
    tom_img = loadImage("images/cat1.png")
    tomImg1 = loadImage("images/cat2.png","cat3.png")
    tomImg2 = loadImage("images/cat4.png")
    jerry_img1 = loadImage("images/mouse1.png")
    jerryImg2= loadImage("images/mouse2.png")
    jerryImg3= loadImage("images/mouse3.png" )
    jerry_Img4  = loadImage("images/mouse4.png")
    

    

   

    
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   garden = createSprite(500,400,0,0)
   garden.addImage(garden_img)
   tom = createSprite(800,600,0,0)
   tom.addImage(tom_img)
   tom.scale = 0.2
   jerry = createSprite(200,600,0,0)
   jerry.addImage(jerry_img1)
   jerry.scale = 0.2



   
    
    
    



}

function draw() {

    background(0);
    tom.x = World.mouseX
    //Write condition here to evalute if tom and jerry collide
   if(tom.x-jerry.x<(tom.width-jerry.width)/2){
      tom.addImage("running",tomImg1)
      tom.changeImage("running")
       
   }
   if (tom.isTouching(jerry)){
       jerry.addImage("chup",jerry_Img4)
       jerry.changeImage("chup")
       tom.addImage("rukha",tomImg2)
       tom.changeImage("rukha")
   }
   
     
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
      jerry.addImage("teasing2",jerryImg3)
      jerry.changeImage("teasing2")
      jerry.frameDelay = 25
  }
  if(keyCode === LEFT_ARROW){
     jerry.addImage("teasing",jerryImg2) 
     jerry.changeImage("teasing")
     jerry.frameDelay = 25
  }


}
