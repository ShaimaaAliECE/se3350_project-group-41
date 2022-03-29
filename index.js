const { request } = require("express");
const { response } = require("express");
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

//holds all values for database
let playerName  = "";
let lvl2sStreak = 0;
let lvl2sScore = 0;
let lvl2Attempts = 0;
let lvl3sScore = 0;
let lvl3sStreak = 0;
let lvl3Attempts = 0;

let final = 0;


app.post('/finalcall', (req,res)=>{

	const { finalbool } = req.body;

	final = finalbool;


});


if(final = 1){
	app.get('/write',(req,res) =>{

		console.log("write");
		res.json({
			playerName: playerName,
			lvl2sScore: lvl2sScore,
			lvl2Attempts: lvl2Attempts,
			lvl3sScore: lvl3sScore,
			lvl3Attempts: lvl3Attempts,
	
			
		});
		//inserts all data into the database
		
			database.insert({name: playerName, lvl2: lvl2sScore, lvl2A: lvl2Attempts, 
				lvl3: lvl3sScore, lvl3A: lvl3Attempts});
		
	
	
	});
}


app.get('/finallvl', (req,res)=>{

	res.json({

		
		if(err){

			res.end();
			return;

		},

		// final: finalbool

	})
	//database.insert({playername: name});

})


app.post('/name', (req,res)=>{

	const { name } = req.body;
	playerName = name;

	//database.insert({playername: name});

})

app.post('/lvlthree', (req,res)=>{
	const { score, mistakes  } = req.body;

	lvl3sScore = score;
	lvl3Attempts = mistakes;

});


app.post('/lvltwo', (req,res)=>{
	const { score, mistakes } = req.body;

	lvl2sScore = score;
	lvl2Attempts = mistakes;

	console.log(mistakes);
	
	//database.insert({score: score, streak: streak}, function (err, doc) {
	//	if (err) {
	//	  console.log(err);
		});
	 // });
//});


app.get('/scores', (req, res) => {
	console.log("call");
	database.find({}, (err, data) => {

		if(err){

			res.end();
			return;

		}
		console.log(data);
		res.send(data);
	})
})



  