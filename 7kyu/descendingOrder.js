/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number. */

// My Solution:
function descendingOrder(n) {
	return Number(
		String(n)
			.split('')
			.sort((a, b) => b - a)
			.join('')
	);
}

// Test
descendingOrder(123456789); // 987654321
