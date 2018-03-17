var request = require('supertest');
var libraryDAO = require('./../../app/dao/LibraryDAO');
var app = require("../../app");

module.exports.exercise = function (callback) {
    describe("Get books Resource - API", function () {

        it('Has correct format and type', function (done) {
            request(app)
                .get('/api/books/')
                .set('Accept', 'application/json')
                .expect(200)
                .expect(function(res) {
                        var book = res.body[0];
                        if (
                            !(
                                book.id && typeof book.id === 'string' &&
                                book.author && typeof book.author === 'string' &&
                                book.title && typeof book.title === 'string' &&
                                book.genre && typeof book.genre === 'string' &&
                                book.price && typeof book.price === 'string' &&
                                book.publishDate && typeof book.publishDate === 'string' &&
                                book.description && typeof book.description === 'string'
                            )
                        ) {
                            throw new Error('Missing key or data is not of type string');
                        }
                })
                .end(function(err, res){
                    if (err) done(err);
                    else done();
                    callback();
                });
        });

    });
};
