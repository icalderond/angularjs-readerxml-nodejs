console.log("Arrancando server de nodejs");
var express=require("express");
var web=express();
var server;

server=web.listen(1337,function(){
	console.log("Servidor arrancado");
});
web.get("/",function (req,res) {
	res.sendfile("index.html");
});
console.log('Server running at http://127.0.0.1:1337/');