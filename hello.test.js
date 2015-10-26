'use strict';

var test = require('tape');
var hello = require('./hello.js');

test('hello\'s output', function (t) {
  t.equal(hello(), 'Hello World');
  t.end();
});
