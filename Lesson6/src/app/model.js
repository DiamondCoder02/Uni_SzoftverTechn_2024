function() {
	console.log('model.js');
}

const Model = {
	number: 0,
	PrepareNewGame: function (bottom, top) {
		this.number = Math.floor(Math.random() * (top - bottom + 1)) + bottom;
		console.log(this.number);
	}
}