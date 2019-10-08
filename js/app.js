function handleInstructionsModal() {
	// when users click on the element with
	// `.js-what` class, we'll fade in
	// the instructions modal
	$('.js-what').click(function () {
		$('.overlay').fadeIn(1000);
	});

	// when users click on the element with the
	// `.js-close` class, we'll fade out
	// the instructions modal
	$('.js-close').click(function () {
		$(".overlay").fadeOut(1000);
	});
}


// `$(document).ready` lets you specify a
// function that should execute when all the
// resources required by your web page have loaded.
// This code says, when the document is ready, run the
// `handleInstructionsModal` function.
let globalNumber;
let guessCount = 0;
$(document).ready(function () {
	handleInstructionsModal();
	handleNewGame();
	handleSubmit();
});

function handleSubmit() {
	$('form').submit(function (e) {
		e.preventDefault();
		const guess = $('#js-user-guess').val();
		let difference = Math.abs(guess - globalNumber);
		$('ul#guessList').append(
			'<li>' + guess + '</li>'
		);
		guessCount++;
		$('.js-guess-count').text(guessCount);
		if (difference > 50) {
			$('h2#feedback').text('freezing');
		}
		else if (difference > 40) {
			$('h2#feedback').text('cold');
		}
		else if (difference > 30) {
			$('h2#feedback').text('kinda cold');
		}
		else if (difference > 20) {
			$('h2#feedback').text('warm');
		}
		else if (difference > 10) {
			$('h2#feedback').text('kinda hot');
		}
		else if (difference > 0) {
			$('h2#feedback').text('hot');
		}
		else {
			$('h2#feedback').text('winner! Play again?');
			$('#js-guess-submit').hide();
		}
	});
}

function handleNewGame() {
	$('.js-new-game').click(function () {
		$('#js-guess-submit').show();
		generateNumber();
		guessCount = 0;
		$('.js-guess-count').text(guessCount);
		console.log(globalNumber);
		$('ul#guessList').empty();
		$('#js-user-guess').val("");
	});

}
function generateNumber() {
	globalNumber = Math.ceil(Math.random() * 100);
}