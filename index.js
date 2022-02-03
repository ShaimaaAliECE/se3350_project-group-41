const express = require('express');
const app = express();
const port = 1000;




app.get('/', function(req, res) {
  content = '';
  //res.send('Hello World!')

  content += "<style > h1 {color:red;} p {color:blue;} table {width:400px; margin-left: auto; margin-right: auto;}  th {text-align:left;} table,th,td {border:1px solid #000;}.table1, .table1 th, .table1 td{ margin-left: auto; margin-right: auto; margin-top: 4pc; } .table2, .table2 th, .table2 td{margin-left: 15%; margin-right: auto;margin-top: 2pc;}.table3, .table3 th, .table3 td{margin-left: auto;margin-right: 15%;margin-top:-1.75pc;}</style>";
 // content += "<h1>This is a heading</h1> <p>This is a paragraph.</p>";
  content += "<table class = 'table1'> <tr>";
  
  nums = [];
  //1
  for (let i = 0; i < 10; i++) {
    a = Math.floor((Math.random() * 100) + 1);
    nums.push(a);
    content += "<th>"
    content += a;
    content += "</th>"
  }
  content += "</tr></table><br><br>";

  //2
  content += "<table class = 'table2'><tr>";
  for (let i = 0; i < 5; i++) {
    content += "<th>"
    content += nums[i];
    content += "</th>"
  }
  content += "</tr><table>";

  //3
  content += "<table class = 'table3'><tr>";
  for (let i = 5; i < 10; i++) {
    content += "<th>"
    content += nums[i];
    content += "</th>"
  }
  content += "</tr><table>";


  res.send(content)
  //Math.floor((Math.random() * 100) + 1);

});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});
