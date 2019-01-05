var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //  LIFO - last in first out
  this.storage = {};
};


Stack.prototype.push = function(val){
  let index = this.size();
  this.storage[index] = val;
},

Stack.prototype.pop = function(){
  let index = this.size();
  let poppedVal = this.storage[index - 1];
  delete this.storage[index - 1];
  return poppedVal;
},

Stack.prototype.size = function(){
  return Object.keys(this.storage).length;
}