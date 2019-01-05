var Queue = function() {
  var someInstance = {};
  // FIFO
  // Use an object with numeric keys to store values
  var storage = {};
  // {0: a,
  //  1: b,
  //  2: b
  //  }

  // Implement the methods below

  someInstance.enqueue = function(value) {
    let keys = Object.keys(storage);
    if(keys){
      var max = keys.reduce(function(a, b) {
        return Math.max(a, b);
      }, 0);
      storage[max + 1] = value;
    } else {
      storage[0] = value;
    }

  };

  someInstance.dequeue = function() {
    var deletedValue;
        let keys = Object.keys(storage);
    if(keys.length){
      var min = keys.reduce(function(a, b) {
        return Math.min(a, b);
      }, 20);
      deletedValue = storage[min];
      delete storage[min];
    } else {
      return undefined;
    }
    return deletedValue;
  };


  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
