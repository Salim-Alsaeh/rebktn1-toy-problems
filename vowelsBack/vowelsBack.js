// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'.
// For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.

function vowelBack(string) {
	var vowels = ['a', 'e', 'i', 'o'];
	var movedLetters = ['c', 'o', 'f', 'e'];
	var alphabet = 
	['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var result = [];

	for (let i = 0; i < string.length; i++) {
			var originalIndex = alphabet.indexOf(string[i]);

			if (!vowels.includes(string[i])) {
				if (string[i] === 'c' || string[i] === 'o') {
					result.push(alphabet[alphabet.indexOf(string[i]) - 1]);
				} else if (string[i] === 'd'){
					result.push(alphabet[alphabet.indexOf(string[i]) - 3]);

				} else if(string[i] === 'e') {
					result.push(alphabet[alphabet.indexOf(string[i]) - 4]);

				} else {
					newIndex = alphabet.indexOf(string[i]) + 9;
					if (newIndex > 25 ) {
						newIndex = newIndex - 26;
					}
					result.push(alphabet[newIndex]);
				}

			} else {
				if (string[i] === 'c' || string[i] === 'o') {
					result.push(alphabet[alphabet.indexOf(string[i]) - 1]);
				} else if (string[i] === 'd'){
					result.push(alphabet[alphabet.indexOf(string[i]) - 3]);

				} else if(string[i] === 'e') {
					result.push(alphabet[alphabet.indexOf(string[i]) - 4]);
				} else {
				newIndex = alphabet.indexOf(string[i]) - 5;
				if (newIndex < 0 ) {
					newIndex = newIndex + 26;
				}
				result.push(alphabet[newIndex]);					
				}
			}
			if (movedLetters.includes(result[i])) {

				result[i] = alphabet[originalIndex];
			}
		}

	return result.join('');
}
