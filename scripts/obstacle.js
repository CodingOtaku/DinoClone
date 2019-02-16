let yPos = 200;
function Obstacle() {
  this.x = width;
  this.w = 20;
  this.h = random(50, 100);
  this.heighLight = false;
  this.img = loadImage("assets/cactus.png");

  this.show = function () {
    image(this.img, this.x, height - this.h, this.w, this.h);
  }

  this.hits = function (dino) {
    return !(dino.x + 90 < this.x || dino.x + 10 > this.x + this.w || dino.y < height - this.h);
  }

  this.offScreen = function () {
    return this.x < -this.w;
  }
  this.update = function () {
    this.x -= speed;
  }
}
