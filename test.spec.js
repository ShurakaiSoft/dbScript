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
	describe("Documents", function () {
		var docs = require('./lib/docs');
		describe("load", function () {
			it("should exist as function", function () {
				should.exist(docs.load);
				docs.load.should.be.a.Function;
			});
			it("should load a file");
		});
	});
	describe("Database Connection", function () {
		it("should have a connection to a database");
	});
    describe("Load Data into Database", function () {
        it("should add documents to collections");
    });
});

