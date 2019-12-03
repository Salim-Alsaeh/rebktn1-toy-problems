/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {

    this.storage = [];
    this.minValueStorage = [];
  }  
  // add an item to the top of the stack
    Stack.prototype.push = function(value) {

      if (!minValueStorage.length ||
          value <= minValueStorage[minValueStorage.length - 1]) {
        minValueStorage.push(value);
      }
      storage.push(value);
        };

  // remove an item from the top of the stack
    Stack.prototype.pop = function() {


      var value = storage.pop();
      if (value === minValueStorage[minValueStorage.length - 1]) {
        minValueStorage.pop();
      }
      return value;
        };

  // return the number of items in the stack
    Stack.prototype.size = function() {

      return storage.length;
        };
  
  // return the minimum value in the stack
    Stack.prototype.min = function() {

      return minValueStorage[minValueStorage.length - 1];
    
    };


