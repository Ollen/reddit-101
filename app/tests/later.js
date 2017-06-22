const later = require('later');

let d = new Date();
console.log(d);

/**
 * Time Periods
 */

console.log(later.second.val(d));
console.log(later.second.isValid(d, 10));
console.log(later.second.next(d, 27));
