Unicrud
=======
The world's greatest Unicode twitter bot.

Installation
------------
1. Checkout unicrud from GitHub.
2. Run ```npm install```.
3. Sign up for a [Twitter API key](https://dev.twitter.com/).
4. Create a [```conf/api.json```](#confapijson) file containing your API key information.
5. Launch unicrud: ```node lib/cli.js```

It will send an initial tweet, and then another every 2 hours.

conf/api.json
----------------------------
It should look like this:
```json
{
  "consumer_key":        "xxxxx",
  "consumer_secret":     "xxxxx",
  "access_token":        "xxxxx",
  "access_token_secret": "xxxxx"
}
```

License
-------
Unicrud is distributed under the [Eclipse Distribution License](http://www.eclipse.org/org/documents/edl-v10.php).
