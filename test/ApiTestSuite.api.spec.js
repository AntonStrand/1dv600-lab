var libraryDAO = require('./../app/dao/LibraryDAO');
var getBooksResource = require('./api/GetBooksResource.api.spec');
var removeBookResource = require('./api/RemoveBookResource.api.spec');
var addBookResource = require('./api/AddBookResource.api.spec');

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

// Setup
var orignalXML;
libraryDAO.readXMLFile(function(xml){
    orignalXML = xml;
    libraryDAO.writeXMLFile(testData);

    // Exercise
    getBooksResource.exercise(function() {
        removeBookResource.exercise(function() {
            addBookResource.exercise(function() {
                console.log('All tests are done')
                tearDown();
            });
        });
    });
});


function tearDown () {
    libraryDAO.writeXMLFile(orignalXML);
}