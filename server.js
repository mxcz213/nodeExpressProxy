var express = require('express');
var path = require('path');
var app = express();

var indexPath = path.join(__dirname,'/src/index/index.html');

app.get('/',function(req,res){
	res.sendFile(indexPath);
})

app.use('/src',express.static(path.join(__dirname,'src')));

//nodejs  反向代理解决请求后端接口跨域问题
var proxy = require('http-proxy-middleware');
var proxyOption = {
	target:'http://rapapi.org/mockjsdata/19913/private/v1/',
	changeOrigin:true
}
var exampleProxy = proxy(proxyOption);
app.use('/user/classify',exampleProxy);

app.listen(3000,'127.0.0.1',function(){
	console.log('server is runing at http://127.0.0.1:3000');
});