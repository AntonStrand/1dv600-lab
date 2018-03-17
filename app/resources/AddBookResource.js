(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    // Returns a unique id.
    function generateId (bookList) {
        if (bookList.length > 0) {
            var bookListSortedLargestIdFirst = bookList.slice(0).sort(function(bookA, bookB) {
                return parseInt(bookB.$.id) - parseInt(bookA.$.id);
            });
            return parseInt(bookListSortedLargestIdFirst[0].$.id) + 1;
        } else {
            return 1;
        };

    };

    function trimInput (input) {
        var output = {};
        for (var key in input) {
            output[key] = input[key].trim();
        }
        return output;
    }

    function addBook (data, callback) {
        LibraryDAO.readXMLFile(function(books){
            var book = trimInput(data)
            book.$ = { id: generateId(books) };

            books.push(book);
            LibraryDAO.writeXMLFile(books);
            callback();
        });
    };

    module.exports = {
        generateId,
        trimInput,
        addBook
    }
}());
