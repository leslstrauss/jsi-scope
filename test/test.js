var chai = require("chai");
var expect = chai.expect;
var lib = require('../challenge-1');

describe("counter function", function() {
  it("returns a sequence generator", function (){
 
    var sequence1 = lib.counter();
    var sequence2 = lib.counter();
    expect(sequence1()).to.eql(0, 'first call to sequence1');
    expect(sequence1()).to.eql(1, 'second call to sequence1');
    expect(sequence2()).to.eql(0, 'first call to sequence2');
    expect(sequence1()).to.eql(2, 'thrid call to sequence1');
    expect(sequence2()).to.eql(1, 'second call to sequence2');
  });
});



