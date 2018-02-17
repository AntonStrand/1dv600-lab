(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    /**
     * Get all but the book with the provided id.
     * @param {String} id
     * @param {Object} book 
     */
    function getAllBooksBut (id) {
        return function (book) {
            return book.$.id !== id;
        };
    };

    module.exports = function (id, callback) {
        LibraryDAO.readXMLFile(function(books){
            var remaingBooks = books.filter(getAllBooksBut(id));
            LibraryDAO.writeXMLFile(remaingBooks);
            callback();
        });
    };

}());
