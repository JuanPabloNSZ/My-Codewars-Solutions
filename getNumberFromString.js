/* Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56 */

//* My solution:
function getNumberFromString(s) {
	return Number(
		s
			.split('')
			.filter((x) => !isNaN(x) && x !== ' ')
			.join('')
	);
}
