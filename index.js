var express = require('express')
var app = express()

app.get('/', function (req, res) {
	
	var d = new Date(); 
	var s = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
	res.send(`Yo dog @ ${s}!`)
})

app.listen(3001, function () {
	console.log('Example app listening on port 3001!')
})