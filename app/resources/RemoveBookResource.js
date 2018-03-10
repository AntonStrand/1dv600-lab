(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    /**
     * Test if the book id is not the provided id.
     * @param {String} id
     * @returns {Function} With following information:
     * @param {Object} book
     * @return {Boolean}
     */
    function getAllBooksBut(id) {
        return function (book) {
            return book.$.id !== id;
        };
    };

    // Remove book by id.
    function removeBookById(id, callback) {
        LibraryDAO.readXMLFile(function(books){
            var remaingBooks = books.filter(getAllBooksBut(id));
            LibraryDAO.writeXMLFile(remaingBooks);
            callback();
        });
    };

    module.exports = {
        removeBookById,
        getAllBooksBut
    }

}());
