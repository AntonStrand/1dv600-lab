var request = require('supertest');
var libraryDAO = require('./../../app/dao/LibraryDAO');
var app = require("../../app");

module.exports.exercise = function (callback) {
    describe("Add book Resource - API", function () {
        it('book gets added', function (done) {
            libraryDAO.readXMLFile(function(books){
                // Get test data to compare with
                var expectedResult = books.length + 1;

                request(app)
                    .put('/api/books/')
                    .set('Accept', 'application/json')
                    .field('author', 'T. Est')
                    .field('title', 'Exercise better')
                    .field('genre', 'Random')
                    .field('price', '123')
                    .field('publish_date', '2012-12-12')
                    .field('description', 'A summary about everything.')
                    .expect(200)
                    .expect(function(res) {
                        libraryDAO.readXMLFile(function(books){
                            var result = books.length;
                            if (result !== expectedResult) {
                                if (result === expectedResult - 1) {
                                    throw new Error('The book was not added.');
                                } else {
                                    throw new Error('Unexpected amount of books.');
                                };
                            };
                        });
                    })
                    .end(function(err, res){
                        if (err) done(err);
                        else done();
                        callback();
                    });
            });
        });
    });
};
