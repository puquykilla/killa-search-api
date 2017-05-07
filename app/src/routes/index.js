var controllers = require('../controllers');

module.exports = function (router) {

	// killa voice responses
	router.get('/responses', controllers.voiceResponseController.All);

	// definition routes
	router.get('/definitions/:incoming_message', controllers.definitionController.All);

	// places types
	router.get('/places/types', controllers.placeTypeController.All);

	// web search
	router.get('/webs/:incoming_message/:start?', controllers.webController.All);
}