/*jslint node:true*/
var Bot = require("./bot"),
    express = require("express"),
    util = require("util");

// Removed problematic modules: Zl Zp
var categories = "Cc Cf Co Cs Ll Lm Lo Lt Lu Mc Me Mn Nd Nl No Pc Pd Pe Pf Pi Po Ps Sc Sk Sm So Zs"
	.split(" ")
	.map(function(cat, i) {
		var data = require("unicode/category/" + cat), catArray = [];
		for (var charCode in data) {
			if (Object.prototype.hasOwnProperty.call(data, charCode)) {
				catArray.push(data[charCode]);
			}
		}
		return catArray;
	});

function randElement(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function randomCodePoint() {
	return randElement(randElement(categories));
}

function tweetIt(bot) {
	var point = randomCodePoint();

	// Uncomment this to debug
//	point = require('unicode/category/So')['128169']; 
	var url = "http://codepoints.net/U+" + point.value;
	var tweet = util.format("U+%s '%s' %s %s", point.value, point.name, point.symbol, url);
	bot.tweet(tweet, function(err, reply) {
		if (err) {
			console.error(err);
		}
		if (reply) {
			console.log(reply.created_at + "," + reply.id + "," + reply.text);
			bot.lastTweet = reply.text;
		}
	});
}

function createServer(options) {
	var bot = new Bot(options.twitterConfig);
	var app = express()
		.use(function(req, res, next) {
			var html = "<p><a href=\"https://twitter.com/unicrud/\">Unicrud</a>'s last tweet:</p>"
				+ "<p>" + bot.lastTweet + "</p>";
			res.send(html);
		});
	app.listen(options.port);

	tweetIt(bot);
	setInterval(tweetIt.bind(null, bot), options.tweetInterval);

	return app;
}

module.exports = createServer;
