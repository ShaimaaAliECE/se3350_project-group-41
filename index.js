const {request} = require('express');
const express = require('express');
const app = express();
const port = 1000;
app.use(express.urlencoded({ extended: true}))
app.use(express.static('static'));
app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});
var questions =  [
  { prompt : "What is the next step",
   answer : "idk", //use a documeent selector to get the answer from html
 }
 ];
  
 for( var i =0; i < questions.length; i++)
 {
   var respone = window.prompt(questions[i].prompt)
   if (response == questions[i].answer)
   {
     alert("Correct"); //add sound effects here
   }else
   {
     alert("Wrong");
   }
 }