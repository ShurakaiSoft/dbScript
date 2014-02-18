/**
 * Module for accessing the database
 */


var MongoClient = require('mongodb').MongoClient;

function connect(url, done) {
	try {
		MongoClient.connect(url, function (err, db) {
			if (err) {
				done(err);
			} else {
				done(null, db);
			}
		});
	} catch (e) {
		done(e);
	}
}

module.exports = {
	connect: connect
};