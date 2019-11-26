/* Complete the function that determines the score of a hand in the card game Blackjack (aka 21).

The function receives an array of strings that represent each card in the hand ("2", "3", ..., "10", "J", "Q", "K" or "A")
 and should return the score of the hand (integer).
Scoring rules:

Number cards count as their face value (2 through 10). Jack, Queen and King count as 10. 
An Ace can be counted as either 1 or 11.

Return the highest score of the cards that is less than or equal to 21. 
If there is no score less than or euqal to 21 return the smallest score more than 21.
Examples

["A"]                           ==>  11
["A", "J"]                      ==>  21
["A", "10", "A"]                ==>  12
["5", "3", "7"]                 ==>  15
["5", "4", "3", "2", "A", "K"]  ==>  25 */

var blackJacky = function(arrayOfHand) {
	var result = 0; // tol hold the result
	var aceFlag = false; // to see if there are aces in the handl;
	var aceCount = 0; // to count the number of aces

	// will loop throuth the hand, and increment the result depending on the hand
	for (var i = 0; i < arrayOfHand.length; i++) {
		var card = parseInt(arrayOfHand[i]); // parsing the string to integer
		// if the card is not a number and it is an ace it will set the flag to true and increment the ace count
		// if not it will increment the result by 10.
		// if its a number it will increment the result with that number.
		if (isNaN(card)) {
			if (arrayOfHand[i] === "A") {
			    console.log('in if')
				aceFlag = true;
				aceCount++;
			} else {
			    console.log('else')
				result += 10;
			}
		}
		if (typeof card === "number" && !isNaN(card)) {
			result += card;
		}
	}
	// check if there are aces, and incrememnt the result depending on the ace count.
	if (aceFlag) {
	    if (aceCount === 1 && arrayOfHand.length === 1) {
	        result += 11;
	        return result;
	    }
		if (aceCount === 1 && (result + 11) <= 21) {
			result += 10;
		}
	    if (aceCount === 1 && (result + 11) > 21) {
			result += 1;
		}
		if (aceCount > 1) {
			for (var i = 0; i < aceCount; i++) {
				result += 1;
			}
		}
	}
	return result;

}
