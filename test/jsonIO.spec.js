/**
 * Unit tests
 *
 *
 */

// Dependencies
var should = require('should'),
	path = require('path');


var jsonIO = require('../lib/jsonIO');

/**
 * Unit Tests
 */
describe("Script", function () {
	it("should exist", function () {
		var app = require('../dbScript');
		should.exist(app);
	});
	describe("Documents", function () {
		describe("load JSON file", function () {
			it("should exist as function", function () {
				should.exist(jsonIO.loadJSON);
				jsonIO.loadJSON.should.be.a.Function;
			});
			it("should return the contents of a file as JSON", function (done) {
				jsonIO.loadJSON(path.join(__dirname, '../package.json'), function (err, contents) {
					should.not.exist(err);
					should.exist(contents);
					should.exist(contents.name);
					done();
				});
			});
			it("should return an error if the file is not JSON.", function () {
				jsonIO.loadJSON(path.join(__dirname, '../readme.md'), function (err, contents) {
					should.exist(err);
					should.not.exist(contents);
				});
			});
		});
	});
	describe("Database Connection", function () {
		it("should have a connection to a database");
	});
    describe("Load Data into Database", function () {
        it("should add documents to collections");
    });
});

