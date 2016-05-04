(function() {
  'use strict';

  var largestPalindrome = function() {
    var permutations = [];
    var numString;
    var x;
    var y;

    for (x = 100; x <= 999; x++) {
      for (y = 100 + (x - 100); y <= 999; y++) {
        permutations.push(x * y);
      }
    }

    return permutations.
      sort(function(a, b) { return b - a; }).
      find(function(val) {
        numString = val.toString();
        return numString === numString.split('').reverse().join('');
      })
  }

  console.log(largestPalindrome());
}());
