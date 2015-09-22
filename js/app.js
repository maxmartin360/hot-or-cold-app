
$(document).ready(function(){
	

	answerGenerator();

	/*--- Starting a new game ---*/

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
	});

	$('#guessButton').click(function(e) {
		e.preventDefault();
		processGuess();
		setCount();
		$('#userGuess').val('');
		return false;
	});
	$('.new').click(function() {
		newGame();
	});
  	
});
	
	var answer = 0;
	var userGuess = 0;
	var guessCount = 0;
	var finish = false;
	var count = 0;

	/*--- Answer Generator ---*/
	function answerGenerator() {
		answer = Math.floor(Math.random() * 100) + 1;
		console.log("the secret number is:" + answer);
	}

	function newGame() {

		answerGenerator()
		userGuess = 0;
		guessCount = 0;
		finish = false;
		count = 0;
		$('#feedback').text('Make Your Guess!')
		$('#count').text(0)
		$('#guessList').empty()
		
		$('#userGuess').empty();

	};

	function setCount() {
		count++;
		$('#count').text(count);
	};


	function processGuess() {
		var guess = parseInt($('#userGuess').val());
		$('#guessList').prepend('<li>' + guess +'</li>') 
		var difference = Math.abs(answer - guess);
		if (guess === answer) {
			$('#feedback').text("Congrats you win! Refresh to start a new game!");
			finish = true;
			$("input[type=submit]").attr('disabled','disabled');
			$("#guessButton").text("reset to strt a new game!")
		
		} else if (difference <= 10){
			$('#feedback').text("Your guess is very hot!");
		} else if (difference >=11 && difference <=20){
			$('#feedback').text("Your guess is hot!");
		} else if (difference >=21 && difference <=30){
			$('#feedback').text("Your guess is warm!");
		} else if (difference >=31 && difference <=50){
			$('#feedback').text("Your guess is cold!");
		} else {
			$('#feedback').text("Your guess is suppperrr cold!");
		}
	};


