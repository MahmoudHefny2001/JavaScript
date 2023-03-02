var _ = require('lodash');

var object = { 'a': 1 };
var other = { 'a': 1 };
 
const val = _.isEqual(object, other); // => true
console.log(val);