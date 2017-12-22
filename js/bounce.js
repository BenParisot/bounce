var bg;
var particles = [];

function setup() {
	bg = loadImage("img/cloudback.jpg");
	var cnv = createCanvas(300, 150);
	var x = 400;
	var y = 200;
	cnv.position(x, y);
}




function mousePressed() {
	var p = new Particle(random(width), -5, random(1, 5));
	particles.push(p);
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
		var c = color(135, 206, 250);
		fill(c);
    ellipse(this.pos.x, this.pos.y, 2, 10);
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
 background(bg);

 var wind = createVector(.5, 0);
 for (var i = 0; i < particles.length; i ++){
	 var gravity = createVector(0, 0.25*particles[i].mass);
	 particles[i].applyForce(gravity);
	 
	 if (mouseIsPressed) {
		 // can apply wind here if wanted
	 }

	 particles[i].update();
	 particles[i].display();
 }
}
