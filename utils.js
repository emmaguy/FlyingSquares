var Utils = {
	// http://www.redips.net/javascript/random-color-generator/
	GetRandomColour: function() {
		var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
		var colour = '#';
		for (var i = 0; i < 6; i++) {
			colour += hex[Math.floor(Math.random() * 16)];
		}
		return colour;
	}
};