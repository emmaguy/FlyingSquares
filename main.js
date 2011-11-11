function Main() {
	var self = this;
	var canvas;
	var width;
	var height;
	var backgroundColour = "#fff";
	var numberofSquares = 15;
	var flyingSquares = new Array();
	
	self.clear = function() {
		canvas.fillStyle = backgroundColour;
		canvas.fillRect(0, 0, width, height);
	}
	
	self.draw = function() {
		self.clear();
		
		for (var i = 0; i < flyingSquares.length; i++)
		{
			var squareA = flyingSquares[i];
		
			squareA.move();
			
			// bounce off walls
			var diff = squareA.x + squareA.getWidth() - width;
			if(diff > 0) {
				squareA.dx *= -1;
				squareA.x -= diff;
			}
			if(squareA.x < 0) {
				squareA.dx *= -1;
			}
			
			var ydiff = squareA.y + squareA.getWidth() - height;
			if(ydiff > 0) {
				squareA.dy *= -1;
				squareA.y -= ydiff;
			}
			if(squareA.y < 0) {
				squareA.dy *= -1;
			}
			
			// detect collison between squares
			for (var j = i + 1; j < flyingSquares.length; j++)
			{
				var squareB = flyingSquares[j];
				
				// right of squareA and left of squareB
				var rightCollision = squareB.getLeft() - squareA.getRight();
				if(rightCollision > 0)
					continue;
				
				// left of squareA and right of squareB
				var leftCollision = squareA.getLeft() - squareB.getRight();
				if(leftCollision > 0)
					continue;
					
				// bottom of squareA and top of squareB
				var bottomCollision = squareB.getTop() - squareA.getBottom();
				if(bottomCollision > 0)
					continue;
				
				// top of squareA and bottom of squareB
				var topCollision = squareA.getTop() - squareB.getBottom();
				if(topCollision > 0)
					continue;
				
				squareA.dx *= -1;
				squareB.dx *= -1;				
				squareA.dy *= -1;
				squareB.dy *= -1;
			}
			
			squareA.draw(canvas);
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