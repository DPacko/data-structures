var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
// FIFO - First in first out
  // create an empty object
  var someObject = {};
  someObject.storage = {};
  extend(someObject, queueMethods);
  // return the object
  return someObject;
};

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
}

var queueMethods = {

  // create push method
  enqueue: function(val) {
    let keys = Object.keys(this.storage);
    let max = keys.reduce(function(a, b){
      return Math.max(a, b);
    }, 0);
    this.storage[max + 1] = val;
  },

  // create pop method
  dequeue: function() {
    let keys = Object.keys(this.storage);
    let min = keys.reduce(function(a, b){
      return Math.min(a, b);
    }, keys[0]);
    let poppedValue = this.storage[min];
    delete this.storage[min];
    return poppedValue;
  },

  // size method
  size: function() {
    return Object.keys(this.storage).length;
  }

};





