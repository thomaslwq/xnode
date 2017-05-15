var requesthandler = require("./requesthandler");
var view = {};
//set the rout config
view['/'] = requesthandler.index
view['/start'] = requesthandler.start;
view['/text_demo'] = requesthandler.text_demo
exports.view = view;
