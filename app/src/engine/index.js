var config = require('../configs');
var controllers = require('../controllers');

exports.Response = function(req, res) {
	var incoming_message = req.params.incoming_message
	var response = controllers.internalResponseController.Get(incoming_message);

	if (response != undefined && response != null && response != false) {
		res.status(config.okCode).json({message: response});
	} else {
		res.status(config.errorCode).json({error: 'Response not found'});
	}
};