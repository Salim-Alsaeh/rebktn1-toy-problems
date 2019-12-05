/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/

function characterFrequency(string) {
	var charFreqs = {};
	// counting frequencies
	for (var i = 0; i < string.length; i++) {
		var count = 0;
		for (var j = 0; j < string.length; j++) {
			if (string[i] === string[j]) {
				count++;
			}
		}
		charFreqs[string[i]] = count;
	}

	var charFreqsArray = Object.entries(charFreqs);

	//sortiing in ascending order by charachter 
	charFreqsArray.sort(function(a, b){
		var charA = a[0].toLowerCase(); 
  		var charB = b[0].toLowerCase(); 
  		if (charA < charB) {
    	  return -1;
 		}
		if (charA > charB) {
		  return 1;
		}

  		return 0;
	});

	//sortiing in descending order by frequency
	charFreqsArray.sort(function(a, b){
		var charA = a[1] 
  		var charB = b[1]
  		if (charA < charB) {
    	  return 1;
 		}
		if (charA > charB) {
		  return -1;
		}
		
  		return 0;
	});
	return charFreqsArray;
}