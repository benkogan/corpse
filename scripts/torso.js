var canvas = document.getElementById("corpse");
var ctx = canvas.getContext("2d");


function Pic(xPos, yPos, xLen, yLen, attr, iObj) {
	this.xPos = xPos;
	this.yPos = yPos;
	this.xLen = xLen;
	this.yLen = yLen;
	this.attr = attr;
	iObj.onload = function() {
		ctx.drawImage(iObj, xPos, yPos, xLen, yLen);
	}
	iObj.src = attr;
	this.iObj = iObj;
}

Pic.prototype.move = function(x, y) {
	this.xPos += x;
	this.yPos += y;
}

Pic.prototype.resize = function(x, y) {
	this.xLen += x;
	this.yLen += y;
}

Pic.prototype.hardMove = function(x, y) {
	this.xPos = x;
	this.yPos = y;
}

Pic.prototype.hardResize = function(x, y) {
	this.xLen = x;
	this.yLen = y;
}

Pic.prototype.draw = function() {
	ctx.drawImage(this.iObj, this.xPos, this.yPos, this.xLen, this.yLen);
}

function Paradise(xPos, yPos, xLen, yLen, attr, iObj) {
	Pic.call(this, xPos, yPos, xLen, yLen, attr, iObj);
}

Paradise.prototype = Object.create(Pic.prototype);
Paradise.prototype.constructor = Paradise;

Paradise.prototype.newParadise = function() {
	var i = (Math.floor(Math.random()*10)) % 10 + 1;
	this.attr = "images/paradise/paradise" + i.toString() + ".jpg";
	ctx.drawImage(this.iObj, this.xPos, this.yPos, this.xLen, this.yLen);
	this.iObj.src = this.attr;
	console.log(this.attr);
}

function preload(imgArray) {
	$(imgArray).each(function() {
		$('<img/>')[0].src = this;
	});
}



var CANVAS_WIDTH = 600;
var shirt = new Pic(0, 190, 600, 190, 'images/shirt.png', new Image());
var i = (Math.floor(Math.random()*10)) % 11 + 1;
var j = (Math.floor(Math.random()*10)) % 11 + 1;
var shrc1 = "images/paradise/paradise" + i.toString() + ".jpg";
var shrc2 = "images/paradise/paradise" + j.toString() + ".jpg";

preload([
	'images/paradise/paradise1.jpg',
	'images/paradise/paradise2.jpg',
	'images/paradise/paradise3.jpg',
	'images/paradise/paradise4.jpg',
	'images/paradise/paradise5.jpg',
	'images/paradise/paradise6.jpg',
	'images/paradise/paradise7.jpg',
	'images/paradise/paradise8.jpg',
	'images/paradise/paradise9.jpg',
	'images/paradise/paradise10.jpg',
]);

var bgParadise = new Paradise(0, 190, 1, 190, shrc1, new Image());
var shirtParadise = new Paradise(230, 245, 140, 80, shrc2, new Image());



/* go */

var start = null;
var right = true;
var step = 1;

// help

rXpos = Math.floor(Math.random()*2) - 1;
rYpos = Math.floor(Math.random()*5) - 2.5;
rXlen = Math.floor(Math.random()*2) - 1;
rYlen = Math.floor(Math.random()*5) - 2.5;


function render(timestamp) {
	if (start === null) start = timestamp;
	var progress = timestamp - start;
	bgParadise.move(step,0);
	bgParadise.draw();

	// help
	
	// shirt.move(rXpos, rYpos);
	// shirt.resize(rXlen, rYlen);
	// shirtParadise.move(rXpos, rYpos);
	// shirtParadise.resize(rXlen, rYlen);
	

	shirt.move(rXpos, 0);
	shirt.resize(rXlen, 0);
	shirtParadise.move(rXpos, 0);
	shirtParadise.resize(rXlen, 0);

	shirt.draw();
	shirtParadise.draw();
	if (right && bgParadise.xPos > CANVAS_WIDTH || !right && bgParadise.xPos < 0) {
		right = !right;
		step *= -1;
		bgParadise.newParadise();
		bgParadise.move(step,0);

		rXpos = Math.floor(Math.random()*2) - 1;
		// rYpos = Math.floor(Math.random()*5) - 2.5;
		rXlen = Math.floor(Math.random()*2) - 1;
		// rYlen = Math.floor(Math.random()*5) - 2.5;
		
		shirt.move(rXpos, 0);
		shirt.resize(rXlen, 0);
		shirtParadise.move(rXpos, 0);
		shirtParadise.resize(rXlen, 0);
	}
	if (progress > 2000) {
		start = null;
		shirtParadise.newParadise();

		// help 
		
		shirt.hardMove(0, 190);
		shirt.hardResize(600, 190);
		shirtParadise.hardMove(230, 245);
		shirtParadise.hardResize(140, 80);

		rXpos = Math.floor(Math.random()*10)/10 - .5;
		rYpos = Math.floor(Math.random()*10)/10 - .5;
		rXlen = Math.floor(Math.random()*10)/10 - .5;
		rYlen = Math.floor(Math.random()*10)/10 - .5;
		
	}


	window.requestAnimationFrame(render);
}

window.setTimeout(function() {
	window.requestAnimationFrame(render)
}, 100);


window.setInterval(function() {
	ctx.clearRect(0, 190, 600, 190);
}, 30000);