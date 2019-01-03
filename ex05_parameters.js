var express = require('express')
var app = express()

app.get('/post/:username/:password', function(req,res){
    res.json({
        username: req.params.username,
        password: req.params.password
    })
})

var server = app.listen(3000, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Listening on http://%s:%s", host, port)
})