var express = require('express');
var app = express();

app.post('/', function(req, res) {
    var accept = req.get('Accept');
    var body = req.body

    if(accept != '') {
        res.accept = accept;
    }
    res.send(body);
});

app.listen(process.env.PORT || 8008, function() {
    console.log('listening on port %d', this.address().port);
});

module.exports = app; // for testing

//curl -d "echo" -H "Content-Type: text" -X POST http://localhost:8008
