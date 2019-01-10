var express = require('express')
var app = express()
var path = require('path')

app.use(express.static(path.join(__dirname,'/adminLTE')))
app.set('view engine', 'ejs')
app.set('views', './adminLTE')

app.get('/', function(req,res){
    res.render('index2', {
        header: "NodeJs Tutorial"
    })
})

var server = app.listen(3000,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Listening on http://%s:%s", host, port)
})