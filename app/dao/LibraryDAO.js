(function () {
    "use strict";

    var fs = require('fs');

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js');
    var parseString = xml2js.parseString;
    var builder = new xml2js.Builder();

    // Nest the xml to keep the original structure.
    function nestXMLObject(data) {
        return {
            catalog: {
                book: data
            }
        }
    }

    // Use this file to write and read the xml file.
    var LibraryDAO = {

        // Get the entire file from the file system.
        readXMLFile: function(callback) {
            fs.readFile('/vagrant/books.xml', function(err, data) {
                if (err) throw err;

                parseString(data, function (err, result) {
                    if (err) throw err;
                    callback(result.catalog.book || []);
                });
            })
        },

        // Write the entire file from the file system.
        writeXMLFile: function(data) {
            var xml = builder.buildObject(nestXMLObject(data));
            fs.writeFile('/vagrant/books.xml', xml, function (err) {
                if (err) throw err;
                // console.log('The file has been saved!');
            });
        }
    };

    module.exports = LibraryDAO;
}());
