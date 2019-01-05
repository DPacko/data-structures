class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // LIFO -- Last In First Out
  constructor() {
    this.storage = {};
  }

  push(val) {
    let index = this.size();
    this.storage[index] = val;
  }


  pop() {
    let index = this.size();
    let poppedVal = this.storage[index - 1];
    delete this.storage[index - 1];
    return poppedVal;
  }


  size() {
    return Object.keys(this.storage).length;
  }


}