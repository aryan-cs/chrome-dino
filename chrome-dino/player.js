// Create player class
class Player {

  constructor() {
    
    // Setup player characteristics
    this.tall = 35;
    this.width = 35;
    this.x = 150;
    this.y = height - this.tall;
    this.vely = 0;
    this.gravity = 0.8;
    this.currentAnim = dinoRun;
     
  }

  reset() {

    console.log("Resetting player...");

    this.tall = 35;
    this.width = 35;
    this.x = 150;
    this.y = height - this.tall;
    this.vely = 0;
    this.gravity = 0.8;
    this.currentAnim = dinoRun;

  }
  
  // If space bar was pressed, and player is on ground, jump
  jump() {
    
    if (this.y == height - this.tall) {
      
      // console.log("Whoop!");
      this.tall = 35;
      this.vely = -15;
      this.currentAnim = dinoIdle;

      setTimeout(() => { this.currentAnim = dinoRun; }, 750);
      
    }
    
  }

  duck() {
    
    // console.log("Ducking...");
    this.tall = 18;
    this.currentAnim = dinoDuck;
    
  }
  
  // Check if hit obstacle
  hits(obstacle) {
    
    return collideRectRect(this.x, this.y, this.width, this.tall, obstacle.x, obstacle.y, obstacle.dim, obstacle.dim);
    
  }
  
  // If jumped, jump by jump amount with gravity
  move() {
    
    this.y += this.vely;
    this.vely += this.gravity;
    this.y = constrain(this.y, 0, height - this.tall);
    
  }
  
  // Update display + player colors
  show() {

    if (showHitboxes) {

      strokeWeight(2);
      fill(0, 41, 41, 41); 

      rect(this.x, this.y, this.width, this.tall);
      strokeWeight(3);
      line(player.x + 25, player.y + 15, player.x + searchLength - 25, player.y + 15);

    }

    if (usingImages) {

      image(this.currentAnim, this.x, this.y, this.width, this.tall);

    } else {

      rect(this.x, this.y, this.width, this.tall);

    }
        
  }
  
}