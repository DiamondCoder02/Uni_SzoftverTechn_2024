const Model = (function() {
	var number;

	var self = {
		PrepareNewGame: function (bottom, top) {
			number = Math.floor(Math.random() * (top - bottom + 1)) + bottom;
			console.log(number);
		},
		RegisterGuess: function (guess) {
			// response = 
		},
		IsCorrect: function () {

		},
		GetRespone: function () {

		}
	}

	return self;
})();
