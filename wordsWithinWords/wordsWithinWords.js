/*
Words within Words

Given an array of unique words, find the word that contains the greatest number of other words. A word must be at least two letters long.

nestedWordCount([ "gray", "grays", "ray", "rays", "strays" ]) // 'grays'

*/

function nestedWordCount(words) {
  let storage = {};
  for (let i = 0; i < words.length; i++) {
    storage[words[i]] = 0;
    for (let j = 0; j < words.length; j++) {
      if(words[i].includes(words[j])) {
        storage[words[i]]++;
      }
    }
  }
  return storage;
}
