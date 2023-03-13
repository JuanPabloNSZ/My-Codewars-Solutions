/* Write a function that will encrypt a given sentence into International Morse Code, both the input and out puts will be strings.

Characters should be separated by a single space. Words should be separated by a triple space.

For example, "HELLO WORLD" should return -> ".... . .-.. .-.. --- .-- --- .-. .-.. -.."

A preloaded object/dictionary/hash called CHAR_TO_MORSE will be provided to help convert characters to Morse Code. */

//* My solution:
function encryption(message) {
	return message
		.split('')
		.map((x) => (CHAR_TO_MORSE.hasOwnProperty(x) ? CHAR_TO_MORSE[x] : x))
		.join(' ');
}
