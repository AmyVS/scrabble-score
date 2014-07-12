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

	var mixedAlphabet = onePtKeyArr + twoPtKeyArr + threePtKeyArr + fourPtKeyArr + fivePtKeyArr + eightPtKeyArr + tenPtKeyArr;

	//User input manipulation
	var wordSplit = word.toLowerCase().split("");

	//New array to help compile score
	var ptArr = [];

	for (var i = 0; i < wordSplit.length; i++) {
		for (var j in mixedAlphabet) {
			if (wordSplit[i] === onePtKeyArr[j]) {
				ptArr.push(onePt[wordSplit[i]]);
			}
			else if (wordSplit[i] === twoPtKeyArr[j]) {
				ptArr.push(twoPt[wordSplit[i]]);
			}
			else if (wordSplit[i] === threePtKeyArr[j]) {
				ptArr.push(threePt[wordSplit[i]]);
			}
			else if (wordSplit[i] === fourPtKeyArr[j]) {
				ptArr.push(fourPt[wordSplit[i]]);
			}
			else if (wordSplit[i] === fivePtKeyArr[j]) {
				ptArr.push(fivePt[wordSplit[i]]);
			}
			else if (wordSplit[i] === eightPtKeyArr[j]) {
				ptArr.push(eightPt[wordSplit[i]]);
			}
			else if (wordSplit[i] === tenPtKeyArr[j]) {
				ptArr.push(tenPt[wordSplit[i]]);
			}
		}
	}
	//sums the numbers within ptArr
	var totalScore = ptArr.reduce(function(previousValue, currentValue, index, array) {
		return previousValue + currentValue;
	})

	return totalScore;
}