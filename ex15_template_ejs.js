var express = require('express')
var app = express()
var path = require('path')

app.set('view engine', 'ejs')
app.set('views', './public')

app.get('/', function(req,res){
    res.render('index2', {
        header: "NodeJs Tutorial",
        description: "Hello my name is Attapon",
        courses: ['NodeJs', 'ReactJs', 'React Native', 'Kotlin']
    })
})

var server = app.listen(3000,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Listening on http://%s:%s", host, port)
})