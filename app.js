var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.text({ type: '*/*'}))

app.post('/', function(req, res) {
    var body = req.body

    if(req.get('Content-Type')) {
        console.log(req.get('Content-Type'));
        res = res.type(req.get('Content-Type'));
    }
    res.send(body);
});

app.listen(process.env.PORT || 8000, function() {
    console.log('listening on port %d', this.address().port);
});

module.exports = app; // for testing

//curl -d "echo" -H "Content-Type: text" -X POST http://localhost:8008
