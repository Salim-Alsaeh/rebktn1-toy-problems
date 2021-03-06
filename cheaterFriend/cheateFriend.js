
//     A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
//     Within that sequence, he chooses two numbers, a and b.
//     He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
//     Given a number n, could you tell me the numbers he excluded from the sequence?

// The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string
// (depending on the language) of the form:

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]

// with all (a, b) which are the possible removed numbers in the sequence 1 to n.

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".

// It happens that there are several possible (a, b). The function returns an empty array (or an empty string)
// if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).
//
//
// Example:
// removNb(26) should return [ {15, 21}, {21, 15} ]

function cheaterFriend(n) {
	var sum = 0;
	var result = [];
	// checks if the number is less than zero
	if (n < 0) {
		return "not gonna happen";
	}
	// will sum all the numbers
	for (var i = 1; i <= n; i++) {
		sum += i;
	}
	// those two for will multiply each number with every other number and will check if 
	//the subtaraction of the sum of the two numbers from the sum of all numbers wil equal to 
	//the multiplation of two numbers or not 
	// if so, push the two numbers to an array.
	
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= n; j++) {
			if ( (i * j)  === (sum - (i + j))) {
				result.push([i, j])
			}
		}
	}
	return result;
}