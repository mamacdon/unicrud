/*jslint node:true*/
var config = require("../conf/api.json"),
    server = require("./server");

var port = process.env.VCAP_APP_PORT || 80;
server({
	port: port,
	twitterConfig: config,
	tweetInterval: 16 * 60 * 60 * 1000 // 16 hours
});
console.log("listening on http://localhost:" + port);
