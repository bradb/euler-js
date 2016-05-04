var problem1 = function(max) {
  'use strict';

  var sum = 0;
  var i;

  for (i = 0; i < max; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(problem1(1000));
