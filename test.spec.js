/**
 * Unit tests
 *
 *
 */

// Dependencies
var should = require('should');

/**
 * Unit Tests
 */
describe("Script", function () {
	it("should exist", function () {
		var app = require('./dbScript');
		should.exist(app);
	});
	describe("Database Connection", function () {
		it("should have a connection to a database");
	});
    describe("Load Data into Database", function () {
        it("should add documents to collections");
    });
});

