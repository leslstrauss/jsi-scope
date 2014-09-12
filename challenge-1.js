var x = -1; 

var sequence = function() {
  //calling sequence should cause x to be one higher than it is 
  x = x + 1;
  return x;
};


/**
 * @function SequenceFunction
 * @return {Number} The next number in the sequence
 */

/**
 * Return a sequence function
 *
 * @return {SequenceFunction} The sequence function
 */
module.exports.counter = function() {

  return sequence;
}
