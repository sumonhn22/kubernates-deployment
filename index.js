var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello sumon From Thetips4you" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": " testing Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": "test Great!, It works!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
