/**
 * Module to load and save the file containing MongoDB
 * documents.
 */

// dependencies
var fs = require('fs');

function loadJSON(filename, callback) {
	fs.readFile(filename, {encoding: 'utf8'}, function (err, contents) {
		var data;
		if (err) {
			callback(err);
		} else {
			try {
				data = JSON.parse(contents);
				return callback(null, data);
			} catch (e) {
				callback(e);
			}
		}
	});
}


module.exports = {
	loadJSON: loadJSON
};