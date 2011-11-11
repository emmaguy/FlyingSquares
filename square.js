function Square(x, y, r) {
	var self = this;
	var speedOfSquare = 3;
	
	var colour = Utils.GetRandomColour();
	var dx = Math.ceil(Math.random() * speedOfSquare);
	var dy = Math.ceil(Math.random() * speedOfSquare);

	self.draw = function(canvas) {
		canvas.fillStyle = colour;
		canvas.fillRect(x, y, r, r); 
	}

	self.move = function(width, height) {	
		x += dx;
		y += dy;
		
		if(x + r > width || x < 0) {
			dx *= -1;
		}
		
		if(y + r > height || y < 0) {
			dy *= -1;
		}
	}
}