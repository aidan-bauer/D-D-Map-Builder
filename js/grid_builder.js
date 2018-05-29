/*jslint es6:true*/

(function () {
	"use strict";
	
	const drawingBoard = document.getElementById('drawing_board');
	const ctx = drawingBoard.getContext("2d");
	
	const width = document.getElementById('width');
	const height = document.getElementById('height');
	const pixelsPerSquare = document.getElementById('pixels_per_square');
	
	const buildBtn = document.getElementById("build");
	
	const seed = new Date().getTime();

	//console.log(drawingBoard, width, height);

	let mapWidth = 1000;
	let mapHeight = 1000;
	let squareDimensions = 25;

	function textInputValue(input) {
		let inputValue;
		if (input.value == "") {
			inputValue = input.placeholder;
		}
		else {
			inputValue = input.value;
		}

		return Number(inputValue);
	}

	function refreshValues() {
		squareDimensions = textInputValue(pixelsPerSquare);
		mapWidth = textInputValue(width);
		mapHeight = textInputValue(height);
	}

	buildBtn.onclick = function createGrid() {
		console.log("generating grid");
		ctx.strokeStyle = "#b3b3b375";
		
		for (let y = 0; y < mapHeight; y += squareDimensions) {
			ctx.beginPath();
			ctx.moveTo(0, y);
			ctx.lineTo(mapWidth, y);
			ctx.stroke();
		}
		
		for (let  x = 0; x < mapWidth; x += squareDimensions) {
			ctx.beginPath();
			ctx.moveTo(x, 0);
			ctx.lineTo(x, mapHeight);
			ctx.stroke();
		}
	}
})();