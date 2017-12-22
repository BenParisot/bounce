// $(document).ready(function() {
// 	$(".hello").fadeTo(1000, 1);
// });
var bg;


// var particle1;
// var particle2;
var particles = [];

// var p;

function setup() {
	bg = loadImage("img/cloudback.jpg");
	var cnv = createCanvas(300, 150);
	var x = 400;
	var y = 200;
	cnv.position(x, y);

  // for (var i = 0; i <= 10; i ++){
	// particles[i] = new Particle(random(width), 100, random(1, 5));
	// }
  // particle2 = new Particle(400, 100, 6);
	// p = new Particle(200, 100, 2);
}




function mousePressed() {
	var p = new Particle(random(width), -5, random(1, 5));
	particles.push(p);
}

// function mouse() {
// 	var gravityP = createVector(0, 0.25*p.mass);
// 	p.applyForce(gravityP);
//
// }

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
		var c = color(0, 0, 255);
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
	 // var gravity2 = createVector(0, 0.25*particle2.mass);
	 // particle2.applyForce(gravity2);



	 if (mouseIsPressed) {
	   // particles[i].applyForce(wind);
	  //  particle2.applyForce(wind);
		//  mouse();

	 }

	 particles[i].update();
	 // particle2.update();
	 // p.update();

	 // particles[i].edges();
	 // particle2.edges();
	 // p.edges();

	 particles[i].display();
	 // particle2.display();
	 // p.display();
 }
}
