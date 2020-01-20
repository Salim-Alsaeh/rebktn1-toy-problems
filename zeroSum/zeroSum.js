/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
<<<<<<< HEAD
*/

// in order for numbers to equal zero they have to be equal but one of them is negative
function zeroSum(numbers) {
  var flag = false;
  var negativeEqualExists = {}
  numbers.forEach(e => {
      if(negativeEqualExists[e]) flag = true;
      else negativeEqualExists[-e] = 1;
  });
  return flag;
}
=======
*/
>>>>>>> 95af5ca94c596181a543f52fbc950149d417307f
