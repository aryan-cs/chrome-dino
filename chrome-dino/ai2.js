var obstSpeed;
var obstDist;

var score = 0;
var bestScore = 0;

var baseRange = (getRand(1, 5));

var buffer;
var bestBuffer;
var bufferRand = (getRand(-35, -10));

var randFactor;
var randRand = (getRand(1, 3));
var bestRand;

var gameID = 0;
var bestID = 0;

var rerollVal = (getRand(-4, 4));

var improved = false;

var searchLength;

console.log("### Running with AI Mark 2 ###");

AI = "AI v2"

function check() {

    for (let x = 0; x < obstacle.length; x++) {

        if (gameID > 1) {

            compare();

        }

        obstSpeed = obstacle[x].speed;
        obstDist = obstacle[x].x - player.x;

        buffer = bufferRand;
        randFactor = randRand * obstSpeed + baseRange;

        searchLength = player.x + buffer + randFactor - 30;

        if (obstDist < searchLength && !obstacle[x].detected) {

            player.jump();
            obstacle[x].detected = true;

        }

    }

}

function compare() {

    if (score > bestScore) {

        improved = true;

        bestScore = score;
        bestBuffer = buffer;
        bestRand = randFactor;
        bestID = gameID;

        bufferRand = (getRand(-30, -10) + rerollVal);
        randRand = (getRand(1, 5) + rerollVal);

    } else {

        buffer = bestBuffer;
        randFactor = bestRand;

    }

}

function stats() {

    console.log("##############################################");
    console.log("Game ID: " + gameID);
    console.log("Game Score: " + score);
    console.log("Current Buffer: " + buffer);
    console.log("Current Randomizer: " + randFactor);
    console.log("----------------------------------------------");

    if (bestID == 0) {

        console.log("Best Game ID: --");
        console.log("Best Game Score: --");
        console.log("Best Buffer: --");
        console.log("Best Randomizer: --");

    } else {

        console.log("Best Game ID: " + bestID);
        console.log("Best Game Score: " + bestScore);
        console.log("Best Buffer: " + bestBuffer);
        console.log("Best Randomizer: " + bestRand);

    }

    console.log("----------------------------------------------");
    console.log("Did AI improve? --> " + improved);
    console.log("##############################################");

}

function getRand(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;

}


