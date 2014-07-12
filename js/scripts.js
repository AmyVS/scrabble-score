var scrabbleScore = function(word) {
	//Dictionaries
	var onePt = {"a": 1, "e": 1, "i": 1, "o": 1, "u": 1, "l": 1, "n": 1, "r": 1, "s": 1, "t": 1};
	var twoPt = {"d": 2, "g": 2};
	var threePt = {"b": 3, "c": 3, "m": 3, "p": 3};
	var fourPt = {"f": 4, "h": 4, "v": 4, "w": 4, "y": 4};
	var fivePt = {"k": 5};
	var eightPt = {"j": 8, "x": 8};
	var tenPt = {"q": 10, "z": 10};

	//User input manipulation
	var wordSplit = word.toLowerCase().split("");

	var ptArr = [];

	for (var j = 0; j < wordSplit.length; j++) {
		if (wordSplit[j]) {
			ptArr.push(onePt[wordSplit[j]]);
			console.log(ptArr);
		}
	}

	var totalScore = ptArr.reduce(function(previousValue, currentValue, index, array) {
		return previousValue + currentValue;
	})

	return totalScore;
}