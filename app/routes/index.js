var controllers = require('../controllers');

module.exports = function (router) {

	// assistant routes
	router.get('/killa', controllers.KillaController.All);

	// wikipedia routes
	router.get('/wikipedia/:incoming_message', controllers.WikipediaController.All);

	// google routes
	router.get('/google/:incoming_message/:start?', controllers.googleController.All);
}