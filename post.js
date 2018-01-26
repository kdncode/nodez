var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/post.html', function (req, res) {
   res.sendFile( __dirname + "/" + "post.html" );
})

app.get('/headers', function(req, res){ 
    res.send(JSON.stringify(req.headers)); 
});

app.post('/process_post', urlencodedParser, function (req, res) {
   
    // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})



app.listen(8888, function () {
   console.log("Now running");
   

})
