function start(request,response){

	console.log(reqeust);
	response.writeHead(200,{"content-type":"text/plain"});
	response.write(request);
	response.end();
	
}
function index(request,response){
	var httpUtils = require('./httputils');
	var requestParams = httpUtils.getRequestParams(request);
	response.writeHead(200,{"content-type":"text/plain"});
	response.end(requestParams['t']);
}
exports.start = start
exports.index = index