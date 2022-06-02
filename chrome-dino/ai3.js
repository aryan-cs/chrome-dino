var obstDist;

var obstSpeed;

var score = 0;
var bestScore = 0;

var inp1;
var best1;

var inp2;
var best2;

var inp3;
var best3;

var base = 120;

var limit;
var bestLimit = 0;

var gameID = 0;
var bestID = 0;

var improved = false;

var searchLength;

console.log("### Running with AI Mark 3 ###");

AI = "AI v3"

function check() {
    
    for (let i = 0; i < obstacle.length; i++) {

        if (score > bestScore) {

            mutate(i);
    
        } else {

            obstDist = obstacle[i].x - player.x;
            obstSpeed = obstacle[i].speed;
            limit = random(0, 15);
            inp1 = obstSpeed + random(0, limit);
            inp2 = (random(1, 4) * obstSpeed);
            inp3 = random(-10, 0);

        }

        searchLength = (inp1 + inp2 + inp3) + base;

        if (searchLength > 400) {

            obstDist = obstacle[i].x - player.x;
            obstSpeed = obstacle[i].speed;
            limit = random(0, 15);
            inp1 = obstSpeed + random(0, limit);
            inp2 = (random(1, 4) * obstSpeed);
            inp3 = random(-10, 0);

        }

        if (searchLength > obstDist && !obstacle[i].detected) {

            console.log("Obstacle detected!");
            player.jump();
            obstacle[i].detected = true;

        }

    }

}

function stats() {

    if (score > bestScore) {

      bestScore = score;
      bestID = gameID;
      bestLimit = limit;
      improved = true;
  
    }

    console.log("##############################################");

    console.log("Current Generation Score: " + score + " | Game Number: " + gameID);
    console.log("Maiimum Mutation Amount: " + limit);
    console.log("Input (1): " + inp1);
    console.log("Input (2): " + inp2);
    console.log("Input (3): " + inp3);

    console.log("----------------------------------------------");

    if (bestID > 0) {

        console.log("Best Score: " + bestScore + " | From Game #" + bestID);
        console.log("Best Mutation Amount: " + bestLimit);
        console.log("Best Input (1): " + best1);
        console.log("Best Input (2): " + best2);
        console.log("Best Input (3): " + best3);

    } else {

        console.log("Best Score: -- | From --");
        console.log("Best Mutation Amount: --");
        console.log("Best Input (1): --");
        console.log("Best Input (2): --");
        console.log("Best Input (3): --");

    }

    console.log("----------------------------------------------");

    console.log("Did AI improve? --> " + improved)

    console.log("##############################################");

}

function forceKillAI() {

    console.log("Forcing AI death...");
    inp2 = -500;
    console.log("The AI has been killed...");
  
  }

function mutate(i) {

    if (score > bestScore) {

        best1 = inp1;
        best2 = inp2;
        best3 = inp3;

        obstDist = obstacle[i].x - player.x;
        obstDist = obstacle[i].speed;

        limit = bestLimit + random(-3, 3);
        range = obstSpeed + random((limit - 5), limit);

        inp1 = obstSpeed + random(0, limit);
        inp2 = (random(1, 4) * obstSpeed);
        inp3 = random(-10, 0);

    }

}

function random(min, mai) {

    return Math.floor(Math.random() * (mai - min)) + min;

}