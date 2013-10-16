var http = require("http");
var url = require("url");
var view = require("./view");
var route = require("./route");
var config = require("./config");
var debug = config.debug;

http.createServer(function(request,response){

	var postData = '';
	request.setEncoding('utf-8');
	// //获取post数据，post请求比较重，所以nodejs将Post数据分成许多小块，然后触发事件
	// //把数据传递给小块
	// response.addListener('data',function(postDataChunk){
	// 	postData += postDataChunk;
	// });
	// response.addListener('end',function(){


	// });
	var pathname = url.parse(request.url).pathname;
	route.route(view.view,pathname,request,response);
}).listen(config.ports);
console.log("server has started at port:"+config.ports);