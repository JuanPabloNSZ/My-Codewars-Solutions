/* Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same. */

//* My solution:
function distinct(a) {
	return a.filter((x, i) => a.indexOf(x) === i);
}
