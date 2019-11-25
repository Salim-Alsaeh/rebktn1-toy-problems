/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
	var characters = {};

	// assiging each unique character of the string to characters object
	for (var i = 0; i < string.length; i++) {
		characters[string[i]] = 0;
	}

	// counting each character's occureence in the string
	Object.keys(characters).forEach(function(element) {
		for (var i = 0; i < string.length; i++) {
			if (element === string[i]) {
				characters[element] += 1;
			}
		}
	});
    //{A: 2, C: 1, B: 2, D: 1}
    
    // returning the first character of the occurence value of 1
    for (key in characters){
    	if (characters[key] === 1) {
    		return key;
    	}
    }
};
