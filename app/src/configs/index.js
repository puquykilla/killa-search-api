// Server config
exports.systemFieldReplace = process.env.SYSTEMFIELDREPLACE || 'system_name'
exports.systemName = process.env.SYSTEMNAME || 'killa';
exports.port = process.env.PORT || 8080;
exports.apiPrefix = process.env.APIPREFIX || '/api/v1/killa';

// Response Json
exports.responsesJson = process.env.RESPONSESJSON || 'src/files/responses.json';

// Status Codes
exports.errorCode = process.env.ERRORCODE || 500;
exports.okCode = process.env.OKCODE || 200;

// Wikipedia url
exports.wikipediaUrl = process.env.WIKIPEDIAURL || 'https://es.wikipedia.org/w/api.php';
exports.wikipediaAction = process.env.WIKIPEDIAACTION || 'opensearch';
exports.wikipediaSearch = process.env.WIKIPEDIASEARCH || 'Luna';
exports.wikipediaFormat = process.env.WIKIPEDIAFORMAT || 'json';

// Google
exports.googleApiKey = process.env.GOOGLEAPIKEY || 'AIzaSyAnCQb2X9M12rsxdvnLYVVJ-yUUWeCdXug';
exports.googleSearchEngine = process.env.GOOGLESEARCHENGINE || '001165080723936726537:mf_nmgzt2y0';
exports.googleApiCustomSearch = process.env.GOOGLEAPICUSTOMSEARCH || 'https://www.googleapis.com/customsearch/v1';

// Google Places
exports.placesTypes = process.env.PLACESTYPES || 'app/files/places_types.json';