$(document).ready(function() {

	var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var counter = 0;
	$("#counter").html(counter);

	var wins = 0;
	$("#wins").html(wins);

	var losses = 0;
	$("#losses").html(losses);

	var randomRed = getRandom(1,12);
	var randomBlue = getRandom(1,12);
	var randomYellow = getRandom(1,12);
	var randomGreen = getRandom(1,12);

	var bigRandom = getRandom(19,120);
	$("#random").html(bigRandom);


	$("#red").on("click", function() {

		counter = counter + randomRed;
		$("#counter").html(counter);

	});

	$("#blue").on("click", function() {

		counter = counter + randomBlue;
		$("#counter").html(counter);

	});

	$("#yellow").on("click", function() {

		counter = counter + randomYellow;
		$("#counter").html(counter);

	});

	$("#green").on("click", function() {

		counter = counter + randomGreen;
		$("#counter").html(counter);

	});



});

