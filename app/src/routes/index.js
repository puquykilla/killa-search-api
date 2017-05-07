var engine = require('../engine');

module.exports = function (router) {

	// killa voice responses
	//router.get('/responses', controllers.engineResponseController.All);

	// definition routes
	//router.get('/definitions/:incoming_message', controllers.definitionController.All);

	// places types
	//router.get('/places/types', controllers.placeTypeController.All);

	// web search
	//router.get('/webs/:incoming_message/:start?', controllers.webController.All);

	router.get('/engine/:incoming_message', engine.Response);
}