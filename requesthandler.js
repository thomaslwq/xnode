function start(reqeust,response){
	console.log(reqeust);
	response.writeHead(200,{"content-type":"text/plain"});
	response.write("start");
	response.end();
	
}
function index(request,response){
	response.writeHead(200,{"content-type":"text/plain"});
	response.write("welcoome");
	response.end();
}
exports.start = start
exports.index = index