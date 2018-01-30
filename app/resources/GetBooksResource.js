(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var bookList = require('../dao/bookList');


    module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
        console.log(bookList())
    };

}());
