function Obstacle(ctx) {
    this.img = new Image();
    this.img.src = "img/bullet.png";
    this.ctx = ctx;

    this.ctx.scale = ctx.scale(-1, 1);
  
    this.x = this.ctx.canvas.width - 50;
    this.y = this.ctx.canvas.height * 0.75;
    
    this.y0 = this.y;
  
    this.vy = 0;
    this.vx = 0;
  
    
  
    this.w = this.ctx.canvas.width / 20;
    this.h = this.w * 2;
  
    this.drawCount = 0;
  }
  
  Obstacle.prototype.draw = function() {
    this.ctx.drawImage();
    
  };
  
  Obstacle.prototype.move = function() {
    
    
  };
  
  Obstacle.prototype.animate = function() {

  };

 