
$(document).ready(function(){
	var genNum = Math.floor(Math.random()*101);
	var fdbck = $('#feedback');
	var userNum;
	var count = 0;
	var winner = $('.winner');
	var userGuess = $('#userGuess');
	

	//Totes non-essential.  The Gif wasn't replaying, so I had to make it.
	function replayGif(){
		var img = new Image();
		img.src = 'img/winner.gif';
		$('.winner').css('image', 'url("' + img.src + '?x=' + Date.now() + '")');
	};


	//Compares the generated number to the user number
	function distanceBetween(x, y){
		return Math.abs(x - y);

	};
	

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	//Counts users attempts
  	var counting = function(){
  		count += 1;
   		$('#count').text(count);
  	};
	

  	//Starts new game

  	$('.new').click(function(){
		$('#guessList').empty();
		fdbck.text("Make your Guess!");
		genNum = Math.floor(Math.random()*101);
		console.log(genNum);
		winner.fadeOut(1000);
		$('#winTxt').empty();
		$('#count').text("0");
		count = 0;
		userGuess.empty();

		
	});

  	
	console.log(genNum);

	//Passes user tries through the game, gives them feedback, etc.

	$(document).on("click","#guessButton",function(event){
		event.preventDefault();
		//--inserts user number, blocks NaNs, gives feedback--//
		userNum = $('input[id=userGuess]').val();

		if(isNaN(userNum)||userNum>100) {
			alert("Pick a number between 1-100.");
		
			userGuess.val('');
			fdbck.text("ERR!");
			return false;
		}

	
		//If the user wins, play the most amazing thing ever as well as game stats
		else if (genNum == userNum) {
			fdbck.text("You win!");
			replayGif();
			winner.fadeIn(1000);
			$('#winTxt').append("Congratulations, the winning number was " + genNum + " , taking you " + count + " tries! Click the New Game button to play again!");
					

		}
		

		else if (distanceBetween(genNum, userNum) <=5) {
			fdbck.text("BURN BABY BURN");
			counting();

		}

		else if (distanceBetween(genNum, userNum) <=10) {
			fdbck.text("Warmer!");
			counting();
		}

		else if (distanceBetween(genNum, userNum) <=25) {
			fdbck.text("Warm..");
			counting();
		}

		else if (distanceBetween(genNum, userNum) <=50) {
			fdbck.text("Cold");
			counting();
		}

		else if (distanceBetween(genNum, userNum) <=75) {
			fdbck.text("It's freezing in here");
			counting();
		}

		else {
			fdbck.text("Literal Ice Age");
			counting();
		}


		$('#guessList').append(userNum+ ", ");
		userGuess.val('');
			

	});




});


