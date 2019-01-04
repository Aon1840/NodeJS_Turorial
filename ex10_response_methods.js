var express = require('express')
var app = express()
var path = require('path')

app.use(express.static(path.join(__dirname,'/public')))

app.get('/download', function(req,res){
    res.download(path.join(__dirname,'/public/image/test.png'))
})

app.get('/send', function(req,res){
    res.send("Hello word")
})

app.get('/end', function(req,res){
    res.write("Hello, ")
    res.end('My name is aon')
})

app.get('/json', function(req,res){
    var data = {
        result: "Hello",
        status: 200
    }
    res.json(data)
})

app.get('/redirect', function(req,res){
    res.redirect('/json')
})

app.get('/sendfile', function(req,res){
    res.sendFile(path.join(__dirname,'/public/index.html'))
})

var server = app.listen(3000, function(){
    var host = server.address().address
    var port  = server.address().port
    console.log("Listening on port %s",port)
})