const { request } = require("express");
const express = require("express");
const app = express();
const port = 1000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));

app.get("/", function (req, res) {
	let content = "";
	//res.send('Hello World!')

	content +=
		"<style> h1 {color:red;} p {color:blue;} table {width:400px; margin-left: auto; margin-right: auto;}  th {text-align:left;} table,th,td {border:1px solid #000;} </style>";
	// content += "<h1>This is a heading</h1> <p>This is a paragraph.</p>";
	content += "<table><tr>";

	let nums = [];
	//1
	for (let i = 0; i < 10; i++) {
		let a = Math.floor(Math.random() * 100 + 1);
		nums.push(a);
		content += "<th>";
		content += a;
		content += "</th>";
	}
	content += "</tr></table><br><br>";

	//2
	/*content += "<table><tr>";
  for (let i = 0; i < 5; i++) {
    content += "<th>"
    content += nums[i];
    content += "</th>"
  }
  content += "</tr><table>";

  //3
  content += "<table><tr>";
  for (let i = 5; i < 10; i++) {
    content += "<th>"
    content += nums[i];
    content += "</th>"
  }
  content += "</tr><table>";
  */

	res.send(content);
	//Math.floor((Math.random() * 100) + 1);
});

app.listen(port, function () {
	console.log(`Example app listening on port ${port}!`);
});
