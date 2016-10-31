var request = require('request');

var config 		= require('../configs');

// Return all wikipedia results types
exports.All = function(req, res) {
	var incoming_message = req.params.incoming_message

	// Set the headers
	var headers = {
	    'User-Agent':       'Super Agent/0.0.1',
	    'Content-Type':     'application/x-www-form-urlencoded'
	}

	// Configure the request
	keys = {'key': config.googleApiKey, 'cx': config.googleSearchEngine, 'q': incoming_message};
	
	if (req.params.start) {
		keys.start = req.params.start;
	}

	var options = {
	    url: config.googleApiCustomSearch,
	    method: 'GET',
	    headers: headers,
	    qs: keys
	}

	// Start the request
	request(options, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	    	var body = JSON.parse(body);
    		var response = body;
			var items = [];
    		for (var i = 0; i < response.items.length; i++) {
    			items.push(response.items[i]);
    		}

			result = {
				message: {
					engines: [
						{
							name: "google",
							metadata: {
								request: {
									title: response.queries.request[0].title,
									totalResults: response.searchInformation.totalResults,
									searchTerm: response.queries.request[0].searchTerms,
									count: response.queries.request[0].count,
									startIndex: response.queries.request[0].startIndex,
								},
								previousPage: {
									count: response.queries.previousPage[0].count,
									startIndex: response.queries.previousPage[0].startIndex,
								},
								nextPage: {
									count: response.queries.nextPage[0].count,
									startIndex: response.queries.nextPage[0].startIndex,
								},
								items: items
							}
						}
					]
				}
			}
			res.status(config.okCode).json(result);	
	    } else {
	    	res.status(config.errorCode).json({error: 'Data not found'});
	    }
	})
};