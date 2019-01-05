var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

    // {0: 'cat',
     //  1: 'dog',
     //  2: 'aardvark'
     // }

  // Implement the methods below
  someInstance.push = function(value) {
    // put in a variable the last key by invoking size
    let index = someInstance.size();
    // add key/value
    storage[index] = value;
  };

  someInstance.pop = function() {
    let index = someInstance.size();
    var deletedValue = storage[index - 1];
    delete storage[index - 1];
    return deletedValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
