/* I have utilized ChatGPT as a resource for guidance and learning throughout this project. My approach reflects the growing trend of modern developers using AI tools to enhance their coding processes. However, all the final code presented here is my own work, based on own independently thought out prompts and without copying prompts or code from others other than snippets. I believe this practice aligns with the principles of academic honesty, as it emphasizes learning and using technology responsibly. */

// index.js
// where your node app starts

require('dotenv').config();
var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors({ optionsSuccessStatus: 200 })); // enable CORS for testing
app.use(express.static('public'));

// Home route serving index.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Test endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// whoami API endpoint
app.get('/api/whoami', function (req, res) {
  // Get the IP address
  const ipaddress = req.ip;

  // Get the preferred language from the 'Accept-Language' header
  const language = req.headers['accept-language'];

  // Get the software (user agent) from the 'User-Agent' header
  const software = req.headers['user-agent'];

  // Respond with the required JSON object
  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software
  });
});

// Start the server and listen on the configured port
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
