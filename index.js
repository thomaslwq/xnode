var http = require("http");
var url = require("url");
var view = require("./view");
var route = require("./route");
var config = require("./config");
var debug = config.debug;
http.createServer(function(request,resposne){

	var pathname = url.parse(request.url).pathname;
	if(debug){
		console.log(pathname);
	}
	route.route(view.view,pathname,request,resposne);

}).listen(config.ports);
console.log("server has started at port:"+config.ports);