var fs   = require("fs");
function start(request,response){

	console.log(request);
	response.writeHead(200,{"contentType":"text/html"});
	//response.write();
	response.end("start");
	
}
function text_demo(request,response){

	response.writeHead(200,{"contenType":"text/mycustomtype"});
	//response.write();
	response.end("{content-type:text/demo}");
	
}
function index(request,response){
	// var httpUtils = require('./httputils');
	// var requestParams = httpUtils.getRequestParams(request);
	// response.writeHead(200,{"content-type":"text/plain"});
	// response.end(requestParams['t']);
	console.log( __dirname )
	fs.readFile(__dirname +　"/public/index.html",function (err,data){
				console.log(data);
                response.end(data);
        });
}
exports.start = start
exports.index = index
exports.text_demo = text_demo