var http = require('http')
	url = require('url');

var server = http.createServer(function(req,res){
	var ParsedUrl = url.parse(req.url, true),
		Path = ParsedUrl.pathname;
	TrimmedPath = Path.replace(/^\/+|\/+$/g, "");

	var checkHello = TrimmedPath == "hello" ? Write("hello world") : Write("404");

	function Write(message) {
		var Payload = { message },
			PayloadString = JSON.stringify(Payload);

		res.setHeader("Content-Type", "application/json");
		res.writeHead(200);
		res.end(PayloadString);
	}
});

server.listen(1337, function () {
	console.log("Server listening on port http://localhost:1337");
});
