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

  class Stack {
    constructor() {
      this._storage = {};
      this.stack_size = 0;
    }

    push(val) {
      this._storage[this.stack_size] = val;
      this.stack_size++;
    }

    pop() {
      if(this.stack_size === 0) return;
      this.stack_size--;

      var rem = this._storage[this.stack_size];
      console.log(rem)
      delete this._storage[this.stack_size];
      if(this.stack_size < 0) this.stack_size = 0;

      return rem;
    }

    size() {
      return this.stack_size;
    }
  }

  class MinStack {
    constructor() {
      this.min;
      this.stack = new Stack();
    }
    push(value) {
      if(this.stack.stack_size === 0){
        this.stack.push(0);
        this.min = value;
      } else{
        this.stack.push(value - this.min);
        if(value - this.min) {
          this.min = value;
        }
      }
    }

    getMin() {
      if(this.stack.stack_size === 0) return "empty stack"
      return this.min;
    }

    pop() {
      if(this.stack.stack_size === 0) return "empty stack"
      var removed = this.stack.pop();
      console.log(removed);
      if(removed < 0) {
        var temp = this.min;
        this.min -= removed;
        return temp;
      }
      return removed + this.min;
    }

  }