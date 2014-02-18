/**
 * Unit tests for the database connection
 */

// dependencies
var should = require('should');


var db = require('../lib/db');



describe("Database", function () {
	describe("Connection", function () {
		it("should connect to a database", function (done) {
			db.connect('mongodb://127.0.0.1:27017/test', function (err, db) {
				should.not.exist(err);
				should.exist(db.collection);
				done();
			});
		});
		it("should return an error if it can't connect to a database.", function (done) {
			db.connect('invalidurl', function (err, db) {
				should.exist(err);
				should.not.exist(db);
				done();
			});
		});
	});
	describe("Replace Documents", function () {
		it("should remove all old documents");
	});
});
