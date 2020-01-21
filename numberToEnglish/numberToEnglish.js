/*
Number to English

Write a function numberToEnglish, it should take a number and return the number as a string using English words.


numbertoEnglish(7) // "seven"
numberToEnglish(575) // "five hundred seventy-five"
numberToEnglish(78193512) // "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*/

// HELPERS

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
};

var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion'
};

function numberToEnglish(number) {
  // your code here...
  // var result = '';
  // let numberStr = number + '';
  // // checking for edge cases
  // if(number < 21 || (number < 100 && number % 10 === 0)) return numbersToWords[numberStr];
  // else if(number % 10 === 0) return numbersToPlace[numberStr];
  // for (var i = 0; i < numberStr.length; i++) {
  //   let left = numberStr.substring(i); // all of the numbers except the first one
  //   if(i % 3 === 2) {
  //     let str = numberStr.substring(i, i + 2);
  //     if( parseInt(str) < 21 || parseInt(str) % 10 === 0 ) result += numbersToWords[str] + ' ';
  //     else result += numbersToWords[str[0] + '0'] + ' ';
  //   } else if(i % 3 === 1) {
  //     result += numbersToWords[numberStr[i]] + ' ';
  //   } else if (i % 3 === 0) {
  //     result += numbersToPlace[Math.pow(10, i / 3)] || '';

  //   }
  // }
  // return result;
}
