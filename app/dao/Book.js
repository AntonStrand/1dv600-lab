(function () {
  "use strict";

  module.exports = function (id, author, title, genre, price, publishDate, description) { 
    return {
      id: id.toString(),
      author: author.toString(),
      title: title.toString(),
      genre: genre.toString(),
      price: price.toString(),
      publishDate: publishDate.toString(),
      description: description.toString()
    };
  };
}());
