var express = require('express');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.listen(port,function(){
    console.log('Running on port ',port);
});

app.get('/',function(req,res){
    res.send('Hello World');
});