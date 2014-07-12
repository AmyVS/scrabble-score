describe("scrabbleScore", function() {
	it('takes a word and returns the scrabble score for it', function() {
		scrabbleScore("sun").should.equal(3)
	});
});

// Goal of Scrabble Score: 
// Make a page that takes a word and returns the Scrabble score for it. Here are the values of letters in Scrabble:

// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10