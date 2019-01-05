var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //  LIFO
  var obj = Object.create(stackMethods);
  obj.storage = {};
  return obj;
};

var stackMethods = {
  push: function(val){
    let index = this.size();
    this.storage[index] = val;
  },

  pop: function(){
    let index = this.size();
    let poppedVal = this.storage[index - 1];
    delete this.storage[index - 1];
    return poppedVal;
  },

  size: function(){
    return Object.keys(this.storage).length;
  }

};


