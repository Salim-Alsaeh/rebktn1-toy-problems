/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  result.storage = storage;
  
  result.insert = function(k, v) {
    if(storage.length + 1 >= (storageLimit * 0.75)) result.resize(storageLimit * 2);
    var newHash = getIndexBelowMaxForKey(k, storageLimit);
    if(!storage[newHash]) {
      var newBucket = [];
      storage[newHash] = newBucket;
    }
    if(storage[newHash].length > 0) {
      for (var i = 0; i < storage[newHash].length; i++) {
        if(storage[newHash][i][0] === k) storage[newHash][i][1] = v;
      }
    }
    storage[newHash].push([k, v]);
  };

  result.retrieve = function(k) {
    var newHash = getIndexBelowMaxForKey(k, storageLimit);
    for (var i = 0; i < storage[newHash].length; i++) {
      if(storage[newHash][i][0] === k) return storage[newHash][i][1]
    }
    return null;
  };

  result.remove = function(k) {
    if (Storage.length - 1 <= (storageLimit * 0.25)) result.resize(storageLimit / 2);
    var newHash = getIndexBelowMaxForKey(k, storageLimit);
    var res;
    for (var i = 0; i < storage[newHash].length; i++) {
      if(storage[newHash][i][0] === k) {
        result = storage[newHash][i][k];
        storage[newHash][i][0] = undefined;
      }
    }
    return res;
  };

  result.resize = function(newSize) {
    var newRes = {};
    for (var els in result) {
      for (var i = 0; i < result[els].length; i++) {
        var k = result[hash][i];
        newRes.insert(k, newSize)
      }
    }
    result = newRes;
    return result;
  }
  return result;
};
