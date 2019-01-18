const  express = require('express');

const path = require('path');

const app = express();

const  mock = require('../mock/index')

console.log(mock)


app.get('/',function(req,res){
	res.sendFile(path.resolve(__dirname,'../dist/index.html'))
})


app.get('/homeport',function(req,res){
	var ip = mock.getIp('all');
	// ipStr = JSON.stringify(ip);
	console.log(ip)
	res.send(ip)
	res.end();

})


app.get('/port',function(req,res){
	mock.saveIp(req.query.ip,req.query.port)
	res.end();
	// res.sendFile(path.resolve(__dirname,'../dist/index.html'))
})

app.use('/app', express.static('./dist/app'));

app.listen(80, () => console.log('Example app listening on port 3000!'))