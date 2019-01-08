
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create the bucket and insert it
  // let bucket = [];
  // bucket.push(k);
  // bucket.push(v); // [k, v]
  // this._storage.set(index, bucket);

  // check to see if there is already something at the index
  let bucketArr = this._storage.get(index);
  if (bucketArr) {
    let found = false;
    // If there is something already there, loop through the array and see if the key matches
    for (let i = 0; !found && i < bucketArr.length; i++) {
      // if the key matches, update its value
      if (bucketArr[i][0] === k) {
        bucketArr[i].splice(1, 1, v);
        found = true;
        // update value in the bucket array
        this._storage.set(index, bucketArr);
      }
    }
    // if we didn't find it, add it.
    if (!found) {
      // add it
      bucketArr.push([k, v]);
      // update value in the bucket array
      this._storage.set(index, bucketArr);
    }

  //   // if the key is not there, push the key/value pair
  } else {
    // create a bucket with the key/value pair in it
    let newBucketArr = [[k, v]];
    this._storage.set(index, newBucketArr);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get the bucket array at the index
  let bucketArr = this._storage.get(index);
  if(bucketArr){
    // iterate through the bucket array and see if the key is present
    for(let i = 0; i < bucketArr.length; i++){
      if(bucketArr[i][0] === k){
    // if there, return the value associate with the key
        return bucketArr[i][1];
      }
    }
  }
  // what do we return if we don't find it? Currently returns undefined
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get the tuple at the index
    //let tuple = this._storage.get(index);
  // set it's value to an empty array
    //this._storage.set(index, []);

    // Modified to handle collisions - use same logic as retrieve, but then remove the tuple instead of updating it


    // get the bucket array at the index
    let bucketArr = this._storage.get(index);
    // if the bucket array exists
    if(bucketArr){
      // iterate through the bucket array to find the key
      for(let i = 0; i < bucketArr.length; i++){
        if(bucketArr[i][0] === k){
      // remove the tuple from the bucket array
          bucketArr.splice(i, 1);
        }
      }
  }

    // if the bucket array doesn't exist, we do nothing
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: Overall it's constant time
 retrieve: constant time
 remove: contants time
 */


