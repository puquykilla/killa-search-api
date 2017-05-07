var config = require('../configs');

exports.Get = function(value) {
	var fs = require("fs");
	var contents = fs.readFileSync(config.responsesJson);
	var jsonContent = JSON.parse(contents);

	// obtenemos la llave asociada a la respuesta
	
	if (value.toLowerCase() == config.systemName) {
		var response = jsonContent.system_name;
	} else {
		var response = jsonContent.responses[value];
	}

	if (response === undefined || response === null || response === false){
		return jsonContent.default;
	} else {
		return response.replace(config.systemFieldReplace, config.systemName);
	}
};