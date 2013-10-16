var requesthandler = require("./requesthandler");
var view = {};
//set the rout config
view['/'] = requesthandler.index
view['/start'] = requesthandler.start;



exports.view = view;
