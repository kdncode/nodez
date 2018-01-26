
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(req, res){
   res.cookie('name', 'khoa').send('Hey! You are set, Cookies'); //Sets name = express
   console.log('Cookies: ', req.cookies);
    // Expires after 30000 ms from the time it is set.
    // res.cookie('name', 'Hey^^', {expire: 30000 + Date.now()});

    // Expires after 30000 ms from the time it is set.
    // res.cookie('name', 'value', {maxAge: 3000});


});

// Clear/Remove Cookie 
app.get('/clearCookie', function(req, res){
    res.clearCookie('name', 'k').send('Cookie deleted'); 
    //res.end("removed it ")
 });


app.listen(8888);



// Check Cookie: 
// console.log(document.cookie);