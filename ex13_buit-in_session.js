var express = require('express')
var app = express()
var session = require('express-session')
app.use(session({
    secret: 'Bearman1840', cookie: { maxAge: 6000000},
    resave: true, saveUninitialized: false
}))

app.get('/count', function(req,res){
    if (req.session == null){
        req.session.count = 0
    }    

    req.session.count = req.session.count + 1
    res.send("Session Count: "+req.session.count)
})

app.get('/reset', function(req,res){
    req.session.count = 0
    req.session.destroy()
    res.redirect('/count')
})

var server = app.listen(3000,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Listening on port: %s",port)
})