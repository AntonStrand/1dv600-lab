var request = require('supertest');
var libraryDAO = require('./../../app/dao/LibraryDAO');
var app = require("../../app");

module.exports.exercise = function (callback) {
    describe("Remove book Resource - API", function () {
        var testCases = [
            { case: "existing book is removed",   id: 1, expectedLength: 1 },
            { case: "remove the same book twice", id: 1, expectedLength: 1 },
            { case: "remove the last book",       id: 2, expectedLength: 0 }
        ];

        // Exercise
        testCases.forEach(function(test, i){
            it(test.case, function (done) {
                request(app)
                    .delete('/api/books/' + test.id)
                    .set('Accept', 'application/json')
                    .expect(200)
                    .expect(function(res){
                        libraryDAO.readXMLFile(function(xml){
                            var result = xml.find(function(book){
                                book.$.id === test.id; 
                            });
                            if (xml.length !== test.expectedLength) {
                                throw new Error('The number of books are incorrect.');
                            }
                            if (result !== undefined) {
                                throw new Error('The book was NOT removed.');
                            }
                        });
                    })
                    .end(function(err, res){
                        // Teardown if it is the last test
                        if (err) {
                            done(err);
                        } else if(i === testCases.length - 1) {
                            done();
                            callback();
                        } else {
                            done();
                        }
                    });
            });
        });
    });
};