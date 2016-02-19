'use strict';

var https=require('https');
https.get('https://chrome.google.com/webstore/category/extensions?hl=zh-CN',(res) => {
	console.log(res.statusCode);
	res.on('data',function(chunk){
		console.log(chunk.toString());
	});
})