var shiva;
var shivaRight, shivaLeft;
var bgimg;
var X
var ground;
var IMG;
var snow1, snow2;

function setup() {
  createCanvas(800, 400);
  // createSprite(400, 200, 50, 50);

  shiva = createSprite(500, 800, 20, 20);

}
function preload() {
  bgimg = loadImage("snow2.jpg");

  shivaRight = loadImage("boy-wearing-winter-clothes_flip-removebg-preview.png");
  shivaLeft = loadImage("boy-wearing-winter-clothes-removebg-preview.png");

  snow1 = loadImage("snow4.webp");
  snow2 = loadImage("snow5.webp");

}

function draw() {
  background(bgimg);
  ground = createSprite(width, 1000, width * 3, 20);

  scale(0.4);
  left()
  right()
  uplift()
  applygravity(shiva);
  shiva.collide(ground);
  spawnsnow()

  drawSprites();
}
function left() {
  if (keyIsDown(LEFT_ARROW)) {

    X = shivaLeft;
    // console.log("okl");
    shiva.position.x = shiva.position.x - 20
    shiva.addImage(X);
  }
}

function right() {
  if (keyIsDown(RIGHT_ARROW)) {
    X = shivaRight;
    // console.log("okr");
    shiva.addImage(X);
    shiva.position.x = shiva.position.x + 20
  }

}
function uplift() {
  if (shiva.position.y > 450 && shiva.position.y < 1100) {
    if (keyIsDown(UP_ARROW)) {
      shiva.velocity.y = shiva.velocity.y - 10
    }
  }
}
function applygravity(sprite) {
  sprite.velocity.y = sprite.velocity.y + 5
}


function spawnsnow() {
  //write code here to spawn the clouds
  if (frameCount % 20 === 0) {
    var snow = createSprite(width, height - 50, 40, 10);
    snow.x = Math.round(random(0, width * 2));
    snow.scale = 0.5;
    snow.velocityY = snow.velocityY + 3;
    rand = Math.round(random(1, 2));
    if (rand === 1) {
      IMG = snow1
    }
    else {
      IMG = snow2
    }
    snow.addImage(IMG);
  }
}