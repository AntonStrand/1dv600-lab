(function () {
  "use strict";

  module.exports = function (id, author, title, genre, price, publishDate, description) { 
    return {
      id,
      author,
      title,
      genre,
      price,
      publishDate,
      description
    };
  };
}());
