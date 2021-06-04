var bgImg;

var cat;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg1 = loadAniamtion("images/cat.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("add cat2 and cat 3 image url here");
    mouseimg2 = loadAnimation("add mouse2 and mouse3 image url here")
}

function setup(){
    createCanvas(1000,800);
    //create tom    and jerry sprites here



}

function draw() {

    background(225);
    //Write condition here to evalute if tom and jerry collide
     if(cat.x - mouse.x < (cat.width - mouse.width)/2){

     }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
function keypressed(){
    //for moving changing animation write code here

    if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");  
    mouse.frameDelay = 25;
    }
    if(keyCode === RIGHT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseimg2);
        mouse.changeAnimation("mouseTeasing");  
        mouse.frameDelay = 25;
        }


} 