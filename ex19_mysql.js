var express = require('express')
var app = express()
var mysql = require('mysql')

var db = mysql.createConnection({
    host: "database.parka028.me",
    user: "root",
    password: "Peungsook1840%",
    database: 'DEV_Parka_Application',
    port: '3306'
})

app.get('/users', function(req,res){
    queryData(function(result){
        res.json(result)
    })
})

function queryData(callback){
    var db = openDB()

    db.query("SELECT * from Users_user", function(err,result,fields){
        if (err){
            console.log("Message from error: "+err.message)
        } 
        callback(result)
        console.log("\n-------Connected2222!")
    })

    closeDB(db)
}

function openDB(){
    var db = mysql.createConnection({
        host: "database.parka028.me",
        user: "root",
        password: "Peungsook1840%",
        database: 'DEV_Parka_Application',
        port: '3306'
    })

    db.connect(function(err){
        if (err){
            return console.log("Message from error: "+err.message)
        } 
        console.log("\n-------Connected!")
    })

    return db
}

function closeDB(db){
    db.end(function(err){
        if (err) {
            return console.log("Message from error: "+err.message)

        }
        console.log("\n-------UnConnected!")
    })
}

var server = app.listen(3000,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Listen on host: http://%s:%S", host,port)
})

// db.connect(function(err){
    //     if (err){
    //         console.log("Message from error: "+err.message)
    //     } 
    //     console.log("\n-------Connected!")
    
    //     db.query("SELECT * from Users_user", function(err,result,fields){
    //         if (err){
    //             console.log("Message from error: "+err.message)
    //         } 
    //         console.log(result)
    //     })
    //     console.log("\n-------Connected2222!")
    // })