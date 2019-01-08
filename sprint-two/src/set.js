var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //Add item as a key in _storage
  this._storage[item] = 1;
};

setPrototype.contains = function(item) {
  // check to see if item exists in storage
  if(this._storage[item]) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  // ask .contains if item is present
  if(this.contains(item)){
   // if so, remove it
   delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 All the above functions run in Constant time.
 */
