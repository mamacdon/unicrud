/*jslint node:true*/

var Twit = require("twit");

var Bot = function(config) {
	this.twit = new Twit(config);
};

//
//	post a tweet
//
Bot.prototype.tweet = function (status, callback) {
	if(typeof status !== "string") {
		return callback(new Error("tweet must be of type String"));
	} else if(status.length > 140) {
		return callback(new Error("tweet is too long: " + status.length));
	}
	this.twit.post("statuses/update", { status: status }, callback);
};

module.exports = Bot;