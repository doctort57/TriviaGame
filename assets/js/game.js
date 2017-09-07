$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};


	var trivia = {
		questions: ['What is the very first word Vito Corleone says in the film?',
					'How much money does Sollozzo offer Luca Brasi before he kills him?',
					'According to Paulie, how much money is "in that little silk purse',
					'Under whose protection will Fredo be when he goes to Las Vegas?',
					'How many gunshots are heard during the ambush on Vito Corleone?',
					'Which ingredient is not included in Clemenza\'s recipe for tomato sauce?',
					'How many times do Oranges appear throughout the film?',
					'What does Clemenza instruct Rocco to take after he kills Paulie?',
					'What did Fredo do for Moe Greene to slap him around in public?',
					'Finish the quote: "Monday, Tuesday...'],
 		q1: ['A. Give...',
				 'B. Can...',
				 'C. Why...',
				 'D. Bonasera...'],
		q2: ['A. $40,000',
				 'B. $50,000',
				 'C. $15,000',
				 'D. $5,000 to start with'],
		q3: ['A. 30-40 grand',
				 'B. 20-30 grand',
				 'C. 20-40 grand',
				 'D. 40-50 grand'],
		q4: ['A. Don Gaggi in Reno',
				 'B. Moe Greene in Las Vegas',
				 'C. Don Francesco in L.A.',
				 'D. Don Cici in Las Vegas'],
		q5: ['A. 8',
				 'B. 12',
				 'C. 10',
				 'D. 9'],
		q6: ['A. Pickles',
				 'B. Meatballs',
				 'C. Sugar',
				 'D. Wine'],
		q7: ['A. 14',
				 'B. 4',
				 'C. 9',
				 'D. 6'],
		q8: ['A. The briefcase',
				 'B. The Gun',
				 'C. The Cannoli',
				 'D. The Money'],
		q9: ['A. Banging cocktail waitresses two at a time',
				 'B. Late for work all the time',
				 'C. Stealing money from the casino',
				 'D. Too many Banana Daiquiris'],
		q10: ['A. ...Thursday, Wednesday, Friday, Sunday, Saturday.',
				  'B. ...Wednesday, Thursday, Friday, Saturday, Sunday',
				  'C. ...Thursday, Wednesday, Saturday, Friday, Sunday',
				  'D. Wednesday, Thursday, Saturday, Sunday, Friday']		 						
	}

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'What is the very first word Vito Corleone says in the film?',
	possibleAnswers : ['A. Give...',
				 'B. Can...',
				 'C. Why...',
				 'D. Bonasera...'],
	flags : [false, false, true, false],
	answer : 'C. Why...',
	image : "assets/images/Vito.jpg"
};

var q2 = {
	question: 'How much money does Sollozzo offer Luca Brasi before he kills him?',
	possibleAnswers: ['A. $40,000',
				 'B. $50,000',
				 'C. $15,000',
				 'D. $5,000 to start with'],
	flags : [false, true, false, false],
	answer : 'B. Narcotics',
	image : "assets/images/Luca.jpg"
};

var q3 = {
	question : 'According to Paulie, how much money is "in that little silk purse?',
	possibleAnswers : ['A. 30-40 grand',
				 'B. 20-30 grand',
				 'C. 20-40 grand',
				 'D. 40-50 grand'],
	flags : [false, true, false, false],
	answer : 'B. 20-30 grand',
	image : "assets/images/Paulie.jpg"
};

var q4 = {
	question : 'Under whose protection will Fredo be when he goes to Las Vegas?',
	possibleAnswers : ['A. Don Gaggi in Reno',
				 'B. Moe Greene in Las Vegas',
				 'C. Don Francesco in L.A.',
				 'D. Don Cici in Las Vegas'],
	flags : [false, false, true, false],
	answer : 'D. All of the above',
	image : "assets/images/Fredo.jpg"
};

var q5 = {
	question : 'How many gunshots are heard during the ambush on Vito Corleone?',
	possibleAnswers : ['A. 8',
				 'B. 12',
				 'C. 10',
				 'D. 9'],
	flags : [false, false, false, true],
	answer : 'B. Carlo',
	image : "assets/images/Gunshots.jpg"
};

var q6 = {
	question : 'Which ingredient is not included in Clemenza\'s recipe for tomato sauce?',
	possibleAnswers : ['A. Pickles',
				 'B. Meatballs',
				 'C. Sugar',
				 'D. Wine'],
	flags : [true, false, false, false],
	answer : 'A. Pickles',
	image : "assets/images/Clemenza.jpg"
};

var q7 = {
	question : 'How many times do Oranges appear throughout the film?',
	possibleAnswers : ['A. 14',
				 'B. 4',
				 'C. 9',
				 'D. 6'],
	flags : [false, false, true, false],
	answer : 'C. 9',
	image : "assets/images/Oranges.jpg"
};

var q8 = {
	question : 'What does Clemenza instruct Rocco to take after he kills Paulie?',
	possibleAnswers : ['A. The briefcase',
				 'B. The Gun',
				 'C. The Cannoli',
				 'D. The Money'],
	flags : [false, false, true, false],
	answer : 'C. The Cannoli',
	image : "assets/images/Cannoli.jpg"
};

var q9 = {
	question : 'What did Fredo do for Moe Greene to slap him around in public?',
	possibleAnswers : ['A. Banging cocktail waitresses two at a time',
				 'B. Late for work all the time',
				 'C. Stealing money from the casino',
				 'D. Too many Banana Daiquiris'],
	flags : [true, false, false, false],
	answer : 'A. Banging cocktail waitresses two at a time',
	image : "assets/images/MoeGreene.jpg"
};

var q10 = {
	question : 'Finish the quote: "Monday, Tuesday...',
	possibleAnswers : ['A. ...Thursday, Wednesday, Friday, Sunday, Saturday.',
				  'B. ...Wednesday, Thursday, Friday, Saturday, Sunday',
				  'C. ...Thursday, Wednesday, Saturday, Friday, Sunday',
				  'D. Wednesday, Thursday, Saturday, Sunday, Friday'],
	flags : [true, false, false, false],
	answer : 'A. ...Thursday, Wednesday, Friday, Sunday, Saturday',
	image : "assets/images/Saturday.jpg"
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h4>" + questionArray[questionSelection].question + "</h4>");
  var charImage = $("<img alt='image' class='character-image'>").attr("src", questionArray[questionSelection].image);
  $(".image").empty();
  $(".image").append(charImage);
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
}


function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	bootbox.alert({
    message: "Correct Answer",
    className: 'rightMsg',
    buttons: {
      ok: {
   		label: 'Next Question',
        className: 'msgBtn' 
      }
     }
});

}

function answerWrong() {
	wrong++;
	bootbox.alert({
    message: "Wrong Answer",
    className: 'wrongMsg',
    buttons: {
      ok: {
        label: 'Next Question',
        className: 'msgBtn' 
      }
     }
});
}

function showScore() {
	$(".image").empty();
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " Correct Answers</p></h2>");
	$('.question').append("<h2><p>" + wrong + " Incorrect Answers</p></h2><br>");
	countdownTimer.stop();
	$('.timer').empty();
	setup();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
   	answerWrong();
  }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
  	answerCorrect();
 } else if (answerChosen == 'B') {
  	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
  	answerCorrect();
 } else if (answerChosen == 'C') {
   	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
  	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }
 if (correct + wrong < 10) {
 	window.setTimeout(function(){
    	bootbox.hideAll();
	}, 01500);
 } else {
 		bootbox.hideAll();
 }
	
 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


//	$('#start').click(countdownTimer.start);
});