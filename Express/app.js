var express = require('express');
var app = express();

app.get('/', function(request, response){
 console.log(request.url);
 response.send('<h1>Hello World</h1>');   
});

app.get('/about', function(request, response){
    console.log(request.url);
    response.send('<h1>Про сайт</h1>');   
   });

   app.get('/products', function(request, response){
    console.log(request.url);
    response.send('<h1>Контатки</h1>');   
   });
   


app.listen(3000);