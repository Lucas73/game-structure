function Player(ctx) {
  this.img = new Image();
  this.img.src = "img/mario.png";
  this.img.frames = 3;
  this.img.frameIndex = 0;
  this.ctx = ctx;

  this.x = this.ctx.canvas.width * 0.1;
  this.y = this.ctx.canvas.height * 0.75;
  
  this.y0 = this.y;

  this.vy = 0;
  this.vx = 0;

  this.g = 0.5;

  this.w = this.ctx.canvas.width / 20;
  this.h = this.w * 2;

  this.drawCount = 0;

  this.setListeners();
  
}

Player.prototype.draw = function() {
  this.drawCount++;

  this.ctx.drawImage(
    this.img,
    this.img.width * this.img.frameIndex / this.img.frames,
    0,
    this.img.width / this.img.frames,
    this.img.height,
    this.x,
    this.y, 
    this.w, 
    this.h
  )
  if (this.drawCount % 7 === 0) {
    this.animate();
    this.drawCount = 0;
  }
};

Player.prototype.move = function() {
  this.x += this.vx;
  if (this.x + this.w >= this.ctx.canvas.width) {
    this.vx = 0;
    this.x -= 2;
  } 

  if (this.x <= 0) {
    this.vx = 0;
    this.x += 2;
  }
  // else {
  //    this.vx = 0;
  //    this.x += this.vx;
  //  }


  
  this.vy += this.g;
  this.y += this.vy;
  if(this.y > this.y0){
    this.y = this.y0;
    this.vy = 0;
  }

  
};

Player.prototype.animate = function() {
  this.img.frameIndex++;
  if (this.img.frameIndex === this.img.frames) {
    this.img.frameIndex = 0;
  }
  if (this.isJumping()){
    this.img.frameIndex = 2;
  }
};

Player.prototype.jump = function() {
  if (!this.isJumping()){
    this.vy -= 20;
  } 
};

Player.prototype.isJumping = function() {
  return this.y < this.y0;
};

Player.prototype.onKeyDown = function(event) {
  switch (event.keyCode) {
    case KEY_UP:
      this.jump();
      break;
    case KEY_RIGHT:
      this.vx = 10;
      break;
    case KEY_LEFT:
      this.vx = -10;
      break;
  }
};

Player.prototype.onKeyUp = function(event) {
  this.vx = 0;
};

Player.prototype.setListeners = function() {
  document.addEventListener('keydown', this.onKeyDown.bind(this));
  document.addEventListener("keyup", this.onKeyUp.bind(this));
};