var request = require('supertest');
var libraryDAO = require('./../app/dao/LibraryDAO');
var app = require("../app");

var testData = [
    {
        $: {id: '1'},
        author: 'Isaac Asimov',
        title: 'Foundation',
        genre: 'Science Ficition',
        price: 164,
        publish_date: '1951-08-21',
        description: 'Foundation is the first novel in Isaac Asimovs Foundation Trilogy (later expanded into The Foundation Series). Foundation is a cycle of five interrelated short stories, first published as a single book by Gnome Press in 1951. Collectively they tell the story of the Foundation, an institute to preserve the best of galactic civilization after the collapse of the Galactic Empire'
    },
    {
        $: {id: '2'},
        author: 'Isaac Asimov',
        title: 'Foundation and Empire',
        genre: 'Science Ficition',
        price: 79,
        publish_date: '1952-10-12',
        description: 'Foundation and Empire is a novel written by Isaac Asimov that was published by Gnome Press in 1952. It is the second book published in the Foundation Series, and the fourth in the in-universe chronology. It takes place in two halves, originally published as separate novellas. The second part, The Mule, won a Hugo Award.'
    }
];

describe("Remove book Resource", function () {

    // Setup
    var orignalXML;
    libraryDAO.readXMLFile(function(xml){
        orignalXML = xml;
        libraryDAO.writeXMLFile(testData);
    });

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
                    if(i === testCases.length - 1) {
                        libraryDAO.writeXMLFile(orignalXML);
                    }
                    if (err) done(err);
                    else done();
                });
        });
    });
});
