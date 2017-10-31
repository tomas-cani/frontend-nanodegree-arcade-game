// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
  this.initialize();
  this.sprite = 'images/char-boy.png';
}

Player.prototype.update = function(dt) {}

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(key) {
  switch (key) {
    case 'up':
      if (this.y <= 58 ) {
        this.reachWater();
      } else {
        this.y = this.y - 83;
      }
      break;
    case 'right':
      this.x = this.x >= (ctx.canvas.width - 101) ? this.x : this.x + 101;
      break;
    case 'down':
      this.y = this.y >= 83 * (config.numRows - 1) - 25 ? this.y : this.y + 83;
      break;
    case 'left':
      this.x = this.x <= 0 ? this.x : this.x - 101;
      break;
  }
}

Player.prototype.initialize = function () {
  this.x = getRandomInt(1, config.numCols - 1) * 101; // Start at random position in row
  this.y = 83 * (config.numRows - 1) - 25; // Start in last row
};

Player.prototype.reachWater = function () {
  this.initialize();
  setScore(++score);
};

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
