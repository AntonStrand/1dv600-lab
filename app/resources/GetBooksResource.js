(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var Book = require('../dao/Book');

    // return the books as a JSON with array of book-objects.
    module.exports = function getBooks (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
        LibraryDAO.readXMLFile(function(bookData){
            var books = bookData.map(function(bookInfo){
                return Book(
                    bookInfo.$.id,
                    bookInfo.author,
                    bookInfo.title,
                    bookInfo.genre,
                    bookInfo.price,
                    bookInfo.publish_date,
                    bookInfo.description
                );
            });
            
            callback(JSON.stringify(books));

        });
    };
}());
