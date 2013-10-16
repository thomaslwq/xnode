
function getRequestParams(request){
	var querystring = require("querystring");
	var url = require("url");
	var stringname = url.parse(request.url).query
	return querystring.parse(stringname);
}
exports.getRequestParams = getRequestParams