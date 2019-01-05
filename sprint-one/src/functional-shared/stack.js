var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // LIFO - Last In First Out
  // create an empty object
  var someObject = {};
  someObject.storage = {};
  extend(someObject, stackMethods);
  // return the object
  return someObject;
};

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
}

var stackMethods = {

  // create push method
  push: function(val) {
    let index = this.size();
    this.storage[index] = val;
  },

  // create pop method
  pop: function() {
    let index = this.size();
    let poppedValue;
    poppedValue = this.storage[index - 1];
    delete this.storage[index -1];
    return poppedValue;
  },

  // size method
  size: function() {
    return Object.keys(this.storage).length;
  }

};


