const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
var db = null;

const MongoClient = require('mongodb').MongoClient 
const uri = "mongodb://arleudo:elfo1977@localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000"
MongoClient.connect(uri, (err, client) => {
    if(err){
        return console.log(err);
    }

    db = client.db("quanta");

    app.listen(9000, function(){
        console.log("Rodando");
    });
})

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.send("Heloo");
});

app.post("/employee", jsonParser, (req, res)=>{
    const employee = req.body;
    db.collection('employee').save(employee, (err, result)=>{
        if(err) return console.log(err);

        console.log("salvo");
        res.redirect("/");
    })
    console.log(employee);
    res.json(employee);
});



