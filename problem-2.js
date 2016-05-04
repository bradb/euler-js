(function() {
  'use strict';

  var isEven = function(x) {
    return x % 2 === 0;
  };

  var fib = function(x, y, sum) {
    if (typeof(x) === "undefined") {
      return fib(1, 2, 0);
    } else if (y < 4000000) {
      return fib(y, x + y, sum + (isEven(y) ? y : 0));
    } else {
      return sum;
    }
  };

  console.log(fib());
})();
