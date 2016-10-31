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
	var options = {
	    url: config.wikipediaUrl,
	    method: 'GET',
	    headers: headers,
	    qs: {'action': config.wikipediaAction, 'format': config.wikipediaFormat, 'search': incoming_message}
	}

	// Start the request
	request(options, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	    	body = JSON.parse(body);

	    	var result_len = body[1].length;
	    	var items = [];
	    	for (var i = 0; i < result_len; i++) {
	    		var data = {
		    		title: body[1][i],
		    		definition: body[2][i],
		    		url: body[3][i]
	    		}
	    		items.push(data);
	    	}

			result = {
				message: {
					engines: [
						{
							name: "wikipedia",
							metadata: {
								request: {
									title: body[0],
									totalResults: result_len,
									searchTerm: '',
									count: 0,
									startIndex: 1,
								},
								previousPage: {
									count: 0,
									startIndex: 0,
								},
								nextPage: {
									count: 0,
									startIndex: 0,
								},
								items: items
							}
						}
					]
				}
			}
			res.status(config.okCode).json({message: result});	
	    } else {
	    	res.status(config.errorCode).json({error: 'Data not found'});
	    }
	})
};