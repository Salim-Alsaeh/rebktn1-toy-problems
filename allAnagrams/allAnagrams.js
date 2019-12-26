/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {

  var stringArray = string.split('');
  var result = []

  var generateAnagrams = function(generatedSoFar) {
    generatedSoFar = generatedSoFar || '';

    if(generatedSoFar.length === string.length) {
      result.push(generatedSoFar);
      return;
    }

    for(var i = 0; i < stringArray.length; i++) {
      if(!generatedSoFar.includes(stringArray[i])){
        generateAnagrams(generatedSoFar + stringArray[i])
      }
    }
  }

  generateAnagrams();
  return result;
};