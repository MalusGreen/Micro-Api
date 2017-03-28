var express = require('express');
var app = express();

var cors = require('cors-express');
app.use(cors({}));

//Parse JSON and make sure it's not empty
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

app.listen(4000, function () {
	console.log('App listening on port 4000');
});

app.post('*', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body.data);
});

