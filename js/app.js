// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
for (var i = 0; i < config.numEnemies; i++) {
  allEnemies[i] = new Enemy();
}

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

var score = 0;
var bestScore = -1;

function setScore(newScore) {
  score = newScore;
  document.getElementById('score-number').innerHTML = score;
  if (score > bestScore) {
    bestScore = newScore;
    document.getElementById('best-score-number').innerHTML = bestScore;
  }
}
