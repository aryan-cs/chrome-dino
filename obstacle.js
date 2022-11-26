// Create obstacle class
class Obstacle {
  
  constructor() {
    
    // Setup obtstacle characteristics
    this.dim = 50;
    this.x = width;
    this.y = height - this.dim;
    this.tall = 60;
    this.width = 30;
    this.speed = 5 + acceleration;
    this.currentAnim = obstacleSpr;
    this.detected = false;
     
  }
  
  // Move the obstacle by its speed every update
  move(isPassed) {

    // if (this.x < -50) {

    //   obstacle.splice(obstacle.indexOf(this), 1);
    //   boolArr.splice(boolArr.indexOf(this), 1);

    // }

    check();
    
    if (!crashed) {

      this.x -= this.speed;

    }

    if (player.hits(this)) {

      crashed = true;
      player.currentAnim = dinoDead;
      console.log("Crashed...");
      console.log("GAME OVER");
      this.x = -50;

      stats();
      setTimeout(() => { reset(); }, 3000);

    }

    // If player successfully dodges obstacle, add point
    if (this.x <= player.x) {

      if (!isPassed) {
        
        score++
        // Log player score + update scoreboard
        // console.log("Score: " + score);
        this.speed = this.speed + (0.2 * score);

        return true;

      }

      return false;

    }

    return false;
     
  }
  
  // Update display + obstacle colors
  show() {  

    const purple = color("#9b00e8");
    const grey = color("#292929");

    if (showHitboxes) {

      strokeWeight(2);

      for (let x = 0; x < obstacle.length; x++) {

        if (obstacle[x].detected) {

          fill(0, 41, 41, 41);  
          rect(this.x, this.y, this.width, this.tall);

        } else if (!obstacle[x].detected) {

          fill(0, 41, 41, 41);  
          rect(this.x, this.y, 30, 60);

        }

      } 

    }

    if (usingImages) {

      image(this.currentAnim, this.x, this.y, this.width, this.tall);

    } else {

      rect(this.x, this.y, 30, 60);

    }
        
  }
  
}