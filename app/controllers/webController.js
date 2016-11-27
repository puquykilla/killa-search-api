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

    		pp = verify_previous_page(response);
			previousPage_count = pp[0];
			previousPage_startIndex = pp[1];

    		np = verify_next_page(response);
			nextPage_count = np[0];
			nextPage_startIndex = np[1];

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
									count: previousPage_count,
									startIndex: previousPage_startIndex,
								},
								nextPage: {
									count: nextPage_count,
									startIndex: nextPage_startIndex,
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

function verify_previous_page(response) {
	var pp = new Array();
	if (response.queries.previousPage) {
		pp[0] = response.queries.previousPage[0].count;
		pp[1] = response.queries.previousPage[0].startIndex;
	} else {
		pp[0] = 0;
		pp[1] = 0;
	}
	return pp;
}

function verify_next_page(response) {
	var np = new Array();
	if (response.queries.previousPage) {
		np[0] = response.queries.nextPage[0].count;
		np[1] = response.queries.nextPage[0].startIndex;
	} else {
		np[0] = 0;
		np[1] = 0;
	}
	return np;
}