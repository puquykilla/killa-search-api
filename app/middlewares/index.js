module.exports = function (router) {
	router.use(function(req, res, next) {
		console.log('Im a middleware');
		next();
	});
}