// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies;
var player;
var score;
var timer;
var bestScore = -1;
var speed;
var enemiesIncreaseInterval;
var speedIncreaseInterval;

initApp();

// Initializes all the app state
function initApp() {
  setScore(0);
  resetTimer();
  startTimer();
  allEnemies = [];
  player = new Player();
  speed = config.initialSpeed;
  for (var i = 0; i < config.initialEnemies; i++) {
    allEnemies[i] = new Enemy();
  }
  setIntervals();
}

// Sets the intervals for increasing enemies and speed
function setIntervals() {
  clearInterval(enemiesIncreaseInterval);
  clearInterval(speedIncreaseInterval);
  updateText('enemies-number', allEnemies.length);
  updateText('speed-number', speed);
  enemiesIncreaseInterval = setInterval(increaseEnemies, 10000); // new enemies every 10 sec
  speedIncreaseInterval = setInterval(increaseSpeed, 15000); // more speed every 15 sec
}

// Increases the number of enemies by spawnRate
function increaseEnemies() {
  if (allEnemies.length < config.maxEnemies) {
    for (var i = 0; i < config.spawnRate; i++) {
      allEnemies.push(new Enemy());
    }
  }
  updateText('enemies-number', allEnemies.length);
}

// Increases enemies speed
function increaseSpeed() {
  if (speed < config.maxSpeed) {
    speed += config.acceleration;
  }
  updateText('speed-number', speed);
}

// Sets the score and updates the best score if necessary
function setScore(newScore) {
  score = newScore;
  updateText('score-number', score);
  if (score > bestScore) {
    bestScore = newScore;
    updateText('best-score-number', bestScore);
  }
}

// Starts the game timer
function startTimer() {
  // from https://stackoverflow.com/a/7910506/5384592
  var sec = 0;
  function pad ( val ) { return val > 9 ? val : "0" + val; };
  timer = setInterval( function(){
    updateText('seconds', pad(++sec % 60));
    updateText('minutes', pad(parseInt(sec / 60, 10)));
  }, 1000);
}

// Resets the game timer
function resetTimer() {
  clearInterval(timer);
  updateText('seconds', '00');
  updateText('minutes', '00');
}
