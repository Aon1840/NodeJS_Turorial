var express = require('express')
var router = require('./ex09_export_route_module')
var app = express()

app.use('/api', router)

app.get('/home', function(req,res){
    res.end("home")
})

var server = app.listen(3000, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Listening on http://%s:%s",host,port)
})

