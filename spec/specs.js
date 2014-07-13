describe("scrabbleScore", function() {
	it('takes a word and returns the scrabble score for it', function() {
		scrabbleScore("sun").should.equal(3)
	});

	it('takes a word that contains letters with a value of 2pts or less and returns the correct scrabble score', function() {
		scrabbleScore("dig").should.equal(5)
	});

	it('takes a word that contains letters with a value of 3pts or less and returns the correct scrabble score', function() {
		scrabbleScore("badger").should.equal(10)
	});

	it('takes a word that contains letters with a value of 4pts or less and returns the correct scrabble score', function() {
		scrabbleScore("feather").should.equal(13)
	});

	it('takes a word that contains letters with a value of 5pts or less and returns the correct scrabble score', function() {
		scrabbleScore("knife").should.equal(12)
	});

	it('takes a word that contains letters with a value of 8pts or less and returns the correct scrabble score', function() {
		scrabbleScore("jinx").should.equal(18)
	});

	it('takes a word that contains letters with a value of 10pts or less and returns the correct scrabble score', function() {
		scrabbleScore("jinx").should.equal(18)
	});

	it('takes a word containing upper or lower case letters and returns a scrabble score', function() {
		scrabbleScore("HELLO").should.equal(8)
	});

	it('takes an input that contains symbols and encourages the user to try again', function() {
		scrabbleScore("%^&*(").should.eql([])
	});

	it('takes an input that contains numbers and encourages the user to try again', function() {
		scrabbleScore("34567").should.eql([])
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