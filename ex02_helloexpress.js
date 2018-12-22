var express = require('express')
// ชุดคำสั่งที่ใช้ในการรับ request (instance ของ express)
var app = express()

app.get('/', function(req,res){
    res.end("Hi")
})

app.get('/profile', function(req,res){
    res.end("Hi My name is Aon")
})

app.get('/login', function(req,res){
    res.end("Please, login with your username and password")
})

// เปิด port รัน instance 
var server = app.listen(3000, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Listening at http://%s:%s", host, port)
})
