var express = require('express')
// ชุดคำสั่งที่ใช้ในการรับ request (instance ของ express)
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({
    extended: false
}))

app.all('/test/*', (req,res,next)=>{
    console.log('Pass this line')
    // res.write("Pass this all method\n")
    if (req.query.username == null && req.query.password == null){
        res.end("Please Login!!")
    }
    next()
})

app.get('/', function(req,res){
    res.end("Hi")
})

app.get('/profile', (req,res)=>{
    res.end("Hi My name is Aon")
})

app.get('/test/login', function(req,res){
    res.end("username: "+req.query.username+" ,password: "+req.query.password)
})

app.post('/post', function(req,res){
    res.end("username: "+req.body.username+" ,password: "+req.body.password)
})

app.post('/add', function(req,res){
    res.json({result: "Sueccess!"})
})

// เปิด port รัน instance 
var server = app.listen(3000, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Listening at http://%s:%s", host, port)
})
