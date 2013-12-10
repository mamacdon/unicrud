/*jslint node:true*/
var config = require("../conf/api.json"),
    server = require("./server");

var port = process.env.VCAP_APP_PORT || 80;
server({
	port: port,
	twitterConfig: config,
	tweetInterval: 120 * 60 * 1000 // 120 minutes
});
console.log("listening on http://localhost:" + port);