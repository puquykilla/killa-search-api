// Server config
exports.port = process.env.PORT || 8080;
exports.apiPrefix = process.env.APIPREFIX || '/api/v1';

// Response Json
exports.responsesJson = process.env.RESPONSESJSON || 'app/files/responses.json';

// Status Codes
exports.errorCode = process.env.ERRORCODE || 500;
exports.okCode = process.env.OKCODE || 200;

// Wikipedia url
exports.wikipediaUrl = process.env.WIKIPEDIAURL || 'https://es.wikipedia.org/w/api.php'
exports.wikipediaAction = process.env.WIKIPEDIAACTION || 'opensearch'
exports.wikipediaSearch = process.env.WIKIPEDIASEARCH || 'Luna'
exports.wikipediaFormat = process.env.WIKIPEDIAFORMAT || 'json'