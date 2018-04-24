'use strict';

var expect = require('chai').expect;
var lib = require('./hello');

describe('run hello.js', function() {
  it('should return "Hello World"', function() {
    expect(lib.hello()).to.equal('Hello World');
  });
});

describe('1 plus 1', function() {
  it('should return 2', function() {
    expect(lib.plus(1, 1)).to.be.equal(2);
  });
});
