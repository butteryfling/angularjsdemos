var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){

	fs.readFile("news.json",'utf-8',function(err,data){
		res.writeHead(200,{
		  "Content-Type":'text/plain',
		  'charset':'utf-8',
		  'Access-Control-Allow-Origin':'*',
		  'Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'
		  })
		res.end(data);
	})
	
}).listen(8000,function(){
	console.log("服务器已开启,端口号是8000");
})