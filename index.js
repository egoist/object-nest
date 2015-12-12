var clone = require('lodash.clone');

module.exports = function (obj, key, value) {
  
  key = key.split('.');
  var finalKey = key.pop();
  var nest = obj ? clone(obj, true) : {};
  var base = nest;
  var currentKey;
  while (key.length) {
    currentKey = key.shift();
    if (typeof base[currentKey] !== 'object') {
      base[currentKey] = {};
    } else {
      base[currentKey] = base[currentKey];
    }
    base = base[currentKey];
  }
  base[finalKey] = value;
  return nest;
};