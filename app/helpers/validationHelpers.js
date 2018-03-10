
(function () {
  "use strict";

  // Validate the length of a string.
  function validateStringLengthMaker(min, max) {
    return function(str) {
      str = typeof str === 'string' ? str.trim() : false;
      return (str !== '' && str.length > min && str.length < max);
    }
  }


  module.exports.validateTitle = validateStringLengthMaker(0, 40);
  module.exports.validatePublishDateFormat = function(x) { return false };

}());