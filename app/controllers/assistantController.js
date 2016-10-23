var config 		= require('../configs');
var Enterprises = require('../models/responses');

// Return all system responses
exports.All = function(req, res) {
	var fs = require("fs");
	var contents = fs.readFileSync(config.responsesJson);
	var jsonContent = JSON.parse(contents);
	if (!jsonContent) {
		res.status(config.errorCode).json({error: 'Data not found'});
	} else {
		res.status(config.okCode).json({message: jsonContent});
	}
};