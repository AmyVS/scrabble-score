var scrabbleScore = function(word) {
	//Dictionaries
	var onePt = {"a": 1, "e": 1, "i": 1, "o": 1, "u": 1, "l": 1, "n": 1, "r": 1, "s": 1, "t": 1};
	var twoPt = {"d": 2, "g": 2};
	var threePt = {"b": 3, "c": 3, "m": 3, "p": 3};
	var fourPt = {"f": 4, "h": 4, "v": 4, "w": 4, "y": 4};
	var fivePt = {"k": 5};
	var eightPt = {"j": 8, "x": 8};
	var tenPt = {"q": 10, "z": 10};

	//Dictionary manipulation
	var onePtKeyArr = Object.keys(onePt);
	var twoPtKeyArr = Object.keys(twoPt);
	var threePtKeyArr = Object.keys(threePt);
	var fourPtKeyArr = Object.keys(fourPt);
	var fivePtKeyArr = Object.keys(fivePt);
	var eightPtKeyArr = Object.keys(eightPt);
	var tenPtKeyArr = Object.keys(tenPt);

	var mixedAlphaArr = onePtKeyArr.concat(twoPtKeyArr, threePtKeyArr, fourPtKeyArr, fivePtKeyArr, eightPtKeyArr, tenPtKeyArr);
	var mixedPtDict = {"a": 1, "e": 1, "i": 1, "o": 1, "u": 1, "l": 1, "n": 1, "r": 1, "s": 1, "t": 1, "d": 2, "g": 2, "b": 3, "c": 3, "m": 3, "p": 3, "f": 4, "h": 4, "v": 4, "w": 4, "y": 4, "k": 5, "j": 8, "x": 8, "q": 10, "z": 10};
	//^^^ Searched for a non-jquery way to concat objects and came up empty, for now...

	//User input manipulation
	var wordSplit = word.toLowerCase().split("");
	

	//New array to help compile score
	var ptArr = [];

	for (var i = 0; i < wordSplit.length; i++) {
		if ((wordSplit[i].match(/\W/g)) || (wordSplit[i].match(/[0-9]/))) {
			alert("That's not a word! Please try again.");
			return ptArr;
		}
		else {
			for (var j in mixedAlphaArr) {
				if (wordSplit[i] === mixedAlphaArr[j]) {
					ptArr.push(mixedPtDict[wordSplit[i]]);
				}
			}
		}
	}



	//sums the numbers within ptArr
	var totalScore = ptArr.reduce(function(previousValue, currentValue, index, array) {
		return previousValue + currentValue;
	});
	
	return totalScore;
};

$(document).ready(function() {
	$("form#scrabble-score").submit(function(event) {
		var word = $("input#word").val();
		var result = scrabbleScore(word);

		$(".answer").text(result);

		$("#result").show();
		event.preventDefault();
	});

});