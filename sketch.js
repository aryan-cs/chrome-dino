// Player character
let player;

// Score
// var score = 0;

// Array for obstacles
var obstacle = [];

let boolArr = [];

// Amount to speed up obstacles by
var acceleration = 0.002;

// Boolean to check if player crashed
var crashed = false; 

// Counter for obstacle spawning
var count = 0;

var showHitboxes = false;
var usingImages = true;

var AI = "AI v2"

// Image variables
let dinoDead;
let dinoDuck;
let dinoIdle;
let dinoRun;
let ground1;
let ground2;
let obstacleSpr;
let ptera;

let groundPan1 = 0;
let groundPan2 = 2404;

console.log("### D[ai]no made by Aryan ###");

function loadIMGs() {
  
  if (usingImages) {

    dinoDead = loadImage("../assets/dino-dead.png");
    dinoDuck = loadImage("../assets/dino-duck.gif");
    dinoIdle = loadImage("../assets/dino-idle.png");
    dinoRun = loadImage("../assets/dino-run.gif");
    ground1 = loadImage("../assets/ground1.png");
    ground2 = loadImage("../assets/ground2.png");
    obstacleSpr = loadImage("../assets/obstacle.png");

  }

}

function reset() {

  console.log("Resetting game...");
  
  player.reset();

  // Score
  score = 0;

  // Array for obstacles
  obstacle = [];

  boolArr = [];

  // Amount to speed up obstacles by
  acceleration = 0.002;

  // Boolean to check if player crashed
  crashed = false; 

  // Counter for obstacle spawning
  count = 0;

  gameID++;
  improved = false;

}

// Setup canvas
function setup() {

  document.getElementById("cred").innerHTML += "<br> <br> RUNNING " + AI;

  if (usingImages) { loadIMGs(); }
  
  createCanvas(1490, 350);
  player = new Player();
  console.log("GAME START");

  gameID++;
  
}

// If space button was pressed, check if player can jump (goes to corresponding function)
function keyPressed() {
  
  if (key == " " || keyCode === UP_ARROW) {
    
    console.log("Player jumped!");
    player.jump();
     
  } else if (keyIsDown(SHIFT) || keyIsDown(DOWN_ARROW)) {

    player.duck();
     
  }

  if (key === "h") {
    
    if (showHitboxes) {

      console.log("Hiding hitboxes...");
      showHitboxes = false;

    } else if (!showHitboxes) {

      console.log("Showing hitboxes...");
      showHitboxes = true;

    }

  }
  
}

// Setup background & sprites
function draw() {
  
  // Each update, increase count
  count++;
  
  background("#292929");
  fill("#edce00");
  textSize(32);
  textFont("lucida console"); 
  text("SCORE: " + score, 25, 50);

  if (usingImages) {

    image(ground1, groundPan1, 333);
    image(ground2, groundPan2, 333);

  }
  
  acceleration = acceleration + 0.002;

  if (!crashed) {

    groundPan1 = groundPan1 - 5;
    groundPan2 = groundPan2 - 5;

  }
  
  if (!crashed && groundPan1 < -2404) {
    
    groundPan1 = 2403;

    if (usingImages) {

      image(ground2, groundPan2, 333);

    }
    
  }

  if (!crashed && groundPan2 < -2404) {
    
    groundPan2 = 2403;

    if (usingImages) {

      image(ground1, groundPan1, 333);

    }
    
  }
   
  // Randomly check if new obstacle should be spawned
  if ((random(1) < 0.02) && (count >= random(50, 120))) {
    
    boolArr.push(false);
    obstacle.push(new Obstacle());
    count = 0;
  
  }

  for (i = 0; i < obstacle.length; i++) {
    
    if (!boolArr[i]) {

      boolArr[i] = obstacle[i].move(boolArr[i]);

    } else {

      obstacle[i].move(true);

    }

    obstacle[i].show();

  };

  // For player, update movement and canvas
  player.show();
  player.move();
  
}