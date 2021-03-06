function Game(canvasElement) {
  this.ctx = canvasElement.getContext("2d");
  this.bg = new Background(this.ctx);
  this.intervalId = undefined;
  this.player = new Player(this.ctx);
}

Game.prototype.start = function() {
  this.intervalId = setInterval(function() {
    this.clear();
    this.drawAll();
    this.checkGameOver();
    this.moveAll();
  }.bind(this), DRAW_INTERVAL_MS);
};

Game.prototype.drawAll = function(action) {
  this.bg.draw()
  this.player.draw()
};

Game.prototype.moveAll = function(action) {
  this.bg.move();
  this.player.move();
};

Game.prototype.checkGameOver = function() {
};

Game.prototype.gameOver = function() {
  clearInterval(this.intervalId);

  if (confirm("GAME OVER! Play again?")) {
    location.reload();
  }
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
};
