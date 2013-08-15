/**
 * Generate an x by y grid of randomn colours.
 * Emulator for colorduino led matrix
 */
var LightMatrix = {

	width: 		8,
	height: 	8,
	mode: 		'random-rgb',
	init: function(width, height)
	{
		
		this.width = width || this.width;
		this.height = height || this.height;

		this.drawGrid();

		
	},

	drawGrid: function()
	{
		var row, cell = null
		for (var i = 1; i  <= this.width; i++) 
		{
			
			// render row
			row = $('<div class="row row-' + i + '">');
			for (var j = 1; j  <= this.height; j++) {
				
				cell = $('<div class="cell cell-' + j + '">')
				row.append(cell);
			}
			// console.info(row);
			$(document.body).append(row);
		}


	},

	lightGrid: function(mode)
	{

		mode = mode || this.mode;
		for (var i = 1; i  <= this.width; i++) 
		{
			
			for (var j = 1; j  <= this.height; j++) {
				
				var cell = $('.row-' + i + ' .cell-' + j + '');

				switch (mode)
				{
					case 'random-rgb':
						this.randomRGB(cell);
					break;
					case 'random-hsl':
						this.randomHSL(cell);
					break;
					case 'random-hsl-blue':
						this.randomBlueHSL(cell);
					break;
					case 'random-hsl-green':
						this.randomGreenHSL(cell);
					break;
					case 'random-hsl-red':
						this.randomRedHSL(cell);
					break;
					case 'random-hsl-purple':
						this.randomPurpleHSL(cell);
					break;
					case 'random-hsl-yellow':
						this.randomYellowHSL(cell);
					break;
					case 'random-hsl-orange':
						this.randomOrangeHSL(cell);
					break;
					
					// default:
				}

				if (mode == 'random-rgb')
				{

				}
				
				
			}
			
		}
	},

	randomRGB: function(cell)
	{

		cell.css
		(
			{
				"background-color": 	this.getRandomRGB()
			}
		);

	},

	randomHSL: function(cell)
	{
		cell.css
		(
			{
				"background-color": 	this.getRandomHSL()
			}
		);
	},

	randomBlueHSL: function(cell)
	{
		cell.css
		(
			{
				"background-color": 	this.getRandomBlueHSL()
			}
		);
	},
	randomGreenHSL: function(cell)
	{
		cell.css
		(
			{
				"background-color": 	this.getRandomGreenHSL()
			}
		);
	},
	randomRedHSL: function(cell)
	{
		cell.css
		(
			{
				"background-color": 	this.getRandomRedHSL()
			}
		);
	},

	randomPurpleHSL: function(cell)
	{
		cell.css
		(
			{
				"background-color": 	this.getRandomPurpleHSL()
			}
		);
	},
	randomYellowHSL: function(cell)
	{
		cell.css
		(
			{
				"background-color": 	this.getRandomYellowHSL()
			}
		);
	},
	randomOrangeHSL: function(cell)
	{
		cell.css
		(
			{
				"background-color": 	this.getRandomOrangeHSL()
			}
		);
	},	

	getRandomRGB: function()
	{
		return 'rgb(' + this.getRandomNumber(255) + ',' + this.getRandomNumber(255) + ',' + this.getRandomNumber(255) + ')'
	},

	getRandomHSL: function()
	{
		return 'hsl(' + this.getRandomNumber(255) + ',' + this.getRandomNumber(100) + '%,' + this.getRandomNumber(100) + '%)' 
	},

	getRandomBlueHSL: function()
	{
		return 'hsl(' + this.getRandomInt(230, 250) + ',' + this.getRandomNumber(100) + '%,' + this.getRandomNumber(100) + '%)' 
	},

	getRandomGreenHSL: function()
	{
		return 'hsl(' + this.getRandomInt(100, 120) + ',' + this.getRandomNumber(100) + '%,' + this.getRandomNumber(100) + '%)' 
	},

	getRandomRedHSL: function()
	{
		return 'hsl(' + this.getRandomInt(340, 360) + ',' + this.getRandomNumber(100) + '%,' + this.getRandomNumber(100) + '%)' 
	},

	getRandomPurpleHSL: function()
	{
		return 'hsl(' + this.getRandomInt(270, 290) + ',' + this.getRandomNumber(100) + '%,' + this.getRandomNumber(100) + '%)' 
	},

	getRandomYellowHSL: function()
	{
		return 'hsl(' + this.getRandomInt(50, 70) + ',' + this.getRandomNumber(100) + '%,' + this.getRandomNumber(100) + '%)' 
	},

	getRandomOrangeHSL: function()
	{
		return 'hsl(' + this.getRandomInt(30, 50) + ',' + this.getRandomNumber(100) + '%,' + this.getRandomNumber(100) + '%)' 
	},

	getRandomInt: function(min, max)
	{
		return Math.floor(Math.random() * (max - min + 1) + min);
	},

	getRandomNumber: function(max)
	{
		var random = Math.floor((Math.random('string')*max)+1);
		return random;
	}

};
