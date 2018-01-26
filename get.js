var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/get.html', function (req, res) {
   res.sendFile( __dirname + "/" + "get.html" );
})

app.get('/process_get', function (req, res) {
    
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.listen(8888, function () {
   console.log("Listening");
   

})