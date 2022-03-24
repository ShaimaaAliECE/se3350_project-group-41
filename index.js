const { request } = require("express");
const express = require("express");
const Datastore = require("nedb");


const database = new Datastore('scoreboard.db');
database.loadDatabase();



const app = express();

app.use(express.static("./static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 8080;

app.listen(port, function () {
	console.log(`Example app listening on port ${port}!`);
});

app.post('/db', (req,res)=>{
	const { score, streak } = req.body;

	console.log("cLL");
	console.log(score);
	database.insert({score: score, streak: streak}, function (err, doc) {
		if (err) {
		  console.log(err);
		}
	  });
});



  
