/*jslint es6:true*/
(function() {
	"use strict";
	
	function randomizeGrid(tiles) {
		for (let i = 0; i < tiles.length; i++) {
			let value = Math.random();
			let fill = "";
			let dataValue = "";

			if (value >= 0.5) {
				fill = "#fff";
				dataValue = "1";
			} else {
				fill = "#000";
				dataValue = "0";
			}
			tiles[i].style.fill = fill;
			tiles[i].setAttribute("data-attribute-value", dataValue);
		}
	}
})();