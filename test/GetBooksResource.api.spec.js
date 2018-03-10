var request = require('supertest');
var libraryDAO = require('./../app/dao/LibraryDAO');
var app = require("../app");

describe("Get books Resource - API", function () {

    // Exercise
    it('response with 200 and json', function (done) {
        request(app)
            .get('/api/books/')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(done);
    });

    it('Has correct format if not empty', function (done) {
        request(app)
            .get('/api/books/')
            .set('Accept', 'application/json')
            .expect(200)
            .expect(function(res) {
                if (res.body && res.body.length > 0) {
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
                }
            })
            .end(done);
    });
});
