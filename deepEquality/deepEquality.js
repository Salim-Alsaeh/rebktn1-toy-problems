/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
// first solution
var deepEquals = function(apple, orange) {
  return JSON.stringify(apple) === JSON.stringify(orange);
};

var deepEquals2 = function (apple, orange, flag = false, appleKeys = Object.keys(apple),  orangeKeys = Object.keys(orange)) {

  if (appleKeys.length !== orangeKeys.length) {
    return false;
  }
 

  for (let index = 0; index < appleKeys.length; index++) {
    if (appleKeys[index] === orangeKeys[index]) {
      if (typeof apple[appleKeys[index]] !== 'object') {
        flag = apple[appleKeys[index]] === orange[orangeKeys[index]];
      } else {
        flag = deepEquals2(apple[appleKeys[index]], orange[orangeKeys[index]], flag)
      }
    }
  }
  return flag;
}