/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
	var result = "";
	// will loop through the first string and will do 3 checks on each character :
	// 1- to check if the char is not an empty space
	// 2- to check of the character is included in the second string.
	// 3- to check if the character is not included in our result string to avoid duplication
	// if all of the three checks are passed we add that char to the string.
	for (var i = 0; i < string1.length; i++) {
		if (string1[i] !== " " && string2.includes(string1[i]) && !result.includes(string1[i])) {
			result += string1[i];
		}
	}
	return result;
};
