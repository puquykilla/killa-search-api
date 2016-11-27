var config = require('../configs');

// Return all system responses
exports.All = function(req, res) {
	var fs = require("fs");
	var contents = fs.readFileSync(config.placesTypes);
	var jsonContent = JSON.parse(contents);
	if (!jsonContent) {
		res.status(config.errorCode).json({error: 'Data not found'});
	} else {
		jsonContent.count = jsonContent.types.length;
		res.status(config.okCode).json({message: jsonContent});
	}
};