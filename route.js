function route(view,pathname,request,response){

	console.log('route a request for '+pathname);
	if(typeof view[pathname]  === 'function'){

			view[pathname](request,response);

	}else{
	    console.log("No request handler found for " + pathname);
	    response.writeHead(404, {"Content-Type": "text/html"});
	    response.write("404 Not found");
	    response.end();
	}

}
exports.route = route