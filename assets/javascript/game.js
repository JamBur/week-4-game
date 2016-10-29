$(document).ready(function() {

	// create getRandom var to randomly generate a numbeer
	var getRandom = function(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// set vars for wins and losses, which start as zero, 
	// and create other vars

	var wins = 0;
	var losses = 0;
	var randomRed;
	var randomBlue;
	var randomYellow;
	var randomGreen;
	var bigRandom;
	var counter;
	var winLoss = "";

	// set function to get random numbers within specified range 
	// when called

	function gemReset (){

		randomRed = getRandom(1,12);
		randomBlue = getRandom(1,12);

		randomYellow = getRandom(1,12);
		randomGreen = getRandom(1,12);
		bigRandom = getRandom(19,120);
		counter = 0;
		write();
	}
	
	// 	set function to add to my 4 inrementing spaces in html
	function write (){

		$("#counter").html(counter);
		$("#wins").html(wins);
		$("#losses").html(losses);
		$("#random").html(bigRandom);
		$("#winLoss").html(winLoss);
	}

	// set function increment the add gem amounts and check if won 
	// after incrementing
	function addTotal(increment){
		counter = counter + increment;
		checkWon();
	}

	// set function to be called if counter is equal to bigRandom
	// to alert player, add win & reset. If counter is greater 
	// than bigRandom it will alert player, add a loss & reset; 
	// otherwise just keep counting
	function checkWon(){
		if (counter === bigRandom){
			// $("#winLoss").html("You Won!!");
			winLoss = "You Won!!";
			wins++;
			gemReset();
		}else if (counter > bigRandom){
			// $("#winLoss").html("You Lost!!");
			winLoss = "You Lost!!";
			losses++;
			gemReset();
		} else{
			winLoss = "";
			write();
		}
		
	}

	// set click functions for 4 gems that adds their amount to the 
	// total when clicked
	$("#red").on("click", function() {
		addTotal(randomRed);
	});

	$("#blue").on("click", function() {
		addTotal(randomBlue);
	});

	$("#yellow").on("click", function() {
		addTotal(randomYellow);
	});

	$("#green").on("click", function() {
		addTotal(randomGreen);
	});

	// Call game reset
	gemReset();

});

