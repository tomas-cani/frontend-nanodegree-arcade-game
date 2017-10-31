/* This array holds the relative URL to the image used
 * for that particular row of the game level.
 */
var rowImages = [
  'images/water-block.png',
  'images/stone-block.png',
  'images/stone-block.png',
  'images/grass-block.png',
  'images/stone-block.png',
  'images/stone-block.png',
  'images/grass-block.png'
];

var config = {
  initialEnemies: 4,
  maxEnemies: 16,
  spawnRate: 1,
  initialSpeed: 50,
  maxSpeed: 200,
  acceleration: 10,
  numRows: rowImages.length,
  numCols: 6,
  enemyRows: [1, 2, 4, 5] // rows that have enemies
}
