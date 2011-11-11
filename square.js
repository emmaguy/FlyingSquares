function Square(x, y, width) {
	var self = this;
	var speedOfSquare = 20;
	
	var colour = Utils.GetRandomColour();
	
	// TODO: make these private
	this.x = x;
	this.y = y;
	this.dx = Math.ceil(Math.random() * speedOfSquare) / 10;
	this.dy = Math.ceil(Math.random() * speedOfSquare) / 10;

	self.draw = function(canvas) {
		canvas.fillStyle = colour;
		canvas.fillRect(this.x, this.y, width, width); 
	}
	
	self.getWidth = function() {
		return width;
	}

	self.move = function() {	
		this.x += this.dx;
		this.y += this.dy;
	}
	
	self.getLeft = function() {
		return this.x;
	}
	
	self.getRight = function() {
		return this.x + width;
	}
	
	self.getTop = function() {
		return this.y;
	}
	
	self.getBottom = function() {
		return this.y + width;
	}
}