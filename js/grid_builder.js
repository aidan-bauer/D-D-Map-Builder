const drawingBoard = document.getElementById("drawing_board");
const width = document.getElementById("width");
const height = document.getElementById("height");
const pixelsPerSquare = document.getElementById("pixels_per_square");
const seed = new Date().getTime();

console.log(drawingBoard, width, height);

let mapWidth;
let mapHeight;
let sQuareDimensions;

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

function createGrid() {
	for (let y = 0, i = 0; y < mapHeight; y += squareDimensions) {
		for (let x = 0; x < mapWidth; x += squareDimensions, i++) {
			let newRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
			newRect.style.x = x;
			newRect.style.y = y;
			newRect.style.width = newRect.style.height = squareDimensions;
			newRect.style.fill = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
			newRect.style.stroke = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
			
			drawingBoard.appendChild(newRect);
		}
	}
}

function randomizeGrid() {
	var tiles = document.getElementsByTagName("rect");
	
	for (let i = 0; i < tiles.length; i++) {
		tiles[i].style.fill = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
		tiles[i].style.stroke = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
	}
}