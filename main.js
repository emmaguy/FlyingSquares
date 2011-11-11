function Main() {
	var self = this;
	var canvas;
	var width;
	var height;
	var backgroundColour = "#fff";
	var numberofSquares = 20;
	var flyingSquares = new Array();
	
	self.clear = function() {
		canvas.fillStyle = backgroundColour;
		canvas.fillRect(0, 0, width, height);
	}
	
	self.draw = function() {
		self.clear();
		
		for (var i = 0; i < flyingSquares.length; i++)
		{
			flyingSquares[i].move(width, height);
			flyingSquares[i].draw(canvas);
			
			// detect collison between squares
			
		}
	}
	
	var cvs = document.getElementById("cvsBackground");
		if (cvs.getContext) {
			canvas = cvs.getContext("2d");
			width = cvs.width;
			height = cvs.height;
			
			for(var i = 0; i < numberofSquares; i++)
			{
				flyingSquares[i] = new Square(Math.random() * width, Math.random() * height, 10);
			}
			
			setInterval(self.draw, 10);
		}
}