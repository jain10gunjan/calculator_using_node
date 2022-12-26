//jshint esversion:6

const bodyParser = require("body-parser");
const express = require("express");
const { request } = require("http");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(request,response){
    response.sendFile(__dirname + "/index.html");//__dirname will give the path of the file whether the file is in the local storage or in the cloud.
});//Sending files through express
// Route means different levels of pages in normal understanding.
//CallBack function taking two parameters that is request and response.

app.post("/", function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("The addition of the number is "+ result);
})

app.listen(3000, function(){
    console.log("Server Started On Port 3000");
});