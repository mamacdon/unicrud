/*jslint node:true*/
var config = require("../conf/api.json"),
    server = require("./server");

var vcap = {};
try {
	vcap = JSON.parse(process.env.VCAP_APPLICATION);
} catch (e) {}

var port = vcap.port || 80,
    urls = vcap.application_uris || ["http://localhost:" + port];
server({
	port: port,
	twitterConfig: config,
	tweetInterval: 16 * 60 * 60 * 1000 // 16 hours
});
console.log("Bot running!");
console.log("Status page: " + urls.join(", "));
