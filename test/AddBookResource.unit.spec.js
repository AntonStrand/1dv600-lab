var expect             = require("chai").expect;
var AddBookResource = require("../app/resources/AddBookResource");

describe("AddBookResource", function () {

    describe("generateId", function () {

        it("A unique id is generated", function () {
            var bookIdList = [{$:{id: 1}}, {$:{id: 2}}, {$:{id: 3}}]

            var generatedID = AddBookResource.generateId(bookIdList);
            var result = false

            // Set result to true if there is a match.
            bookIdList.forEach(function(book) {
              if(book.$.id === generatedID) {
                result = true
              }
            })

            expect(result).to.equal(false);
        });

        if("Handle empty array", function () {
            var testData = [];
            var result = AddBookResource.generateId(testData);
            expect(result).to.equal(1);
        })

        it("The source array is unaltered", function () {
            var bookIdList = [{$:{id: 1}}, {$:{id: 2}}, {$:{id: 3}}]
            var compareList = [{$:{id: 1}}, {$:{id: 2}}, {$:{id: 3}}]

            AddBookResource.generateId(bookIdList);
            var matches = 0

            // Test if the order is the same.
            bookIdList.forEach(function(book, i) {
              if(book.$.id === compareList[i].$.id) {
                matches++
              }
            })

            expect(matches).to.equal(3);
        });
    });

    describe("trimInput", function () {
        it("White space is removed", function () {
            var testObj = {
              author: ' Author   ',
              title: 'Book title',
              genre: ' crime',
              price: '123  ',
              publish_date: '  1988-09-01',
              description: ''
            }

            var expectedResult = {
              author: 'Author',
              title: 'Book title',
              genre: 'crime',
              price: '123',
              publish_date: '1988-09-01',
              description: ''
            }

            var result = AddBookResource.trimInput(testObj);

            var matches = 0;
            for (var key in expectedResult) {
              if (result[key] === expectedResult[key]) {
                matches++;
              }
            }

            expect(matches).to.equal(6);
        });
    });
});
