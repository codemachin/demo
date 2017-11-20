var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');


app.use(bodyParser.json({limit:'10mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}));


app.use('/',express.static(__dirname + '/public'));


// api to convert to dollars
app.post('/convert',function(req,res){

	if(req.body== undefined || req.body == null){

		res.send({msg:"Error no data recieved",status:404})

	}else {
		var dollar = req.body.value/65;
		res.send({converted:dollar,status:200})
	}

});


/////////////////////////////// error handling illegal routes /////////////////////////////////////

app.use(function(req, res) {
   
  res.status(404).send("You hit an incorrect path. Check again");
    
}); 

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});