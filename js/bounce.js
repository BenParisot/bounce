var particle1;
var particle2;

function setup() {
  createCanvas(640, 360);
  particle1 = new Particle(200, 100, 2);
  particle2 = new Particle(400, 100, 6);
}

function Particle(x, y, m) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.mass = m;

  this.applyForce = function(force) {
    var f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.set(0, 0);
  }

  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.mass*10, this.mass*10);
  }

  this.edges = function() {
    if (this.pos.y > height) {
      this.vel.y *= -1;
      this.pos.y = height;
    }

    if (this.pos.x > width) {
      this.vel.x *= -1;
      this.pos.x = width;
    }

    if (this.pos.x < 0) {
      this.vel.x *= -1;
      this.pos.x = 0;
    }
  }
}

function draw() {
 background(51);

 var wind = createVector(.5, 0);

 var gravity1 = createVector(0, 0.25*particle1.mass);
 particle1.applyForce(gravity1);
 var gravity2 = createVector(0, 0.25*particle2.mass);
 particle2.applyForce(gravity2);

 if (mouseIsPressed) {
   particle1.applyForce(wind);
   particle2.applyForce(wind);
 }
// particle.applyForce(wind);

 particle1.update();
 particle2.update();

 particle1.edges();
 particle2.edges();
 particle1.display();
 particle2.display();

}
