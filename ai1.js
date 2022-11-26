var score = 0;
var incoming = 0;
var gameSpeed = 0;
var outcome;
var timing = false;
buffer = -10;
var range;
var tweaked;
var orig;
var amount1 = 0;
var amount2 = 15;
var maxNum = getRand(0, 15);
var bestGene = 0;
var gameID = 0;
var topScore = 0;
var prevScore = 0;
var topGame = 0;
var improved = false;

var searchLength;

console.log("### Running with AI Mark 1 ###");

AI = "AI v1"

function check() {

    improved = false;
    
    for (let x = 0; x < obstacle.length; x++) {

        if (score >= prevScore) {

            reroll(x);
    
        } else {

            incoming = obstacle[x].x - player.x;
            gameSpeed = obstacle[x].speed;
            range = gameSpeed + getRand(0, maxNum);

            tweaked = range;

        }

        searchLength = player.x + buffer + tweaked;

        if (searchLength > incoming && !obstacle[x].detected) {

            outcome = "jump";
            obstacle[x].detected = true;

        } else {

            outcome = "run";

        }

        execute();

    }

}

function execute() {

    if (outcome == "jump") {
        
        // console.log("Obstacle detected! Jumping...");
        player.jump();
        outcome == "run";

    } else if (outcome == "run") {
        
        // Logs this comment so many times it causes stupendous amounts of lag
        // console.log("No nearby obstacle...");

    }

}

function stats() {

    if (score > topScore) {

      topScore = score;
      topGame = gameID;
      bestGene = maxNum;
      improved = true;
  
    }

    console.log("##############################################");
    console.log("Game ID: " + gameID);
    console.log("Game Score: " + score);
    console.log("Ending Range: " + range);
    console.log("Maximum Mutation: " + maxNum);
    console.log("----------------------------------------------");

    if (topGame == 0) {

        console.log("Best Game ID: --");
        console.log("Best Game Score: --");
        console.log("Best Maximum Mutation: --");

    } else {

        console.log("Best Game ID: " + topGame);
        console.log("Best Game Score: " + topScore);
        console.log("Best Maximum Mutation: " + bestGene);

    }

    console.log("----------------------------------------------");
    console.log("Did AI improve? --> " + improved);
    console.log("##############################################");

}

function reroll(x) {

    if (score >= prevScore) {

        orig = tweaked;

        incoming = obstacle[x].x - player.x;
        gameSpeed = obstacle[x].speed;
        maxNum = bestGene + getRand(-3, 3);
        range = gameSpeed + getRand((maxNum - 5), maxNum);

        tweaked = range;

    }

  }

function getRand(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;

}