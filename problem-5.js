(function() {
  'use strict';
  var divisibleByAllInRange = function (number, rangeStart, rangeEnd) {
    for (var i = rangeStart; i <= rangeEnd; i++) {
      if (number % i !== 0) {
        return false;
      }
    }
    return true;
  };

  var largestDivibleByAllInRange = function(rangeStart, rangeEnd) {
    var i = rangeEnd;

    while (true) {
      if (divisibleByAllInRange(i, 1, 20)) {
        return i;
      }
      i += rangeEnd;
    }
  }

  console.log(largestDivibleByAllInRange(1, 20));
})();
