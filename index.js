const { request } = require("express");
const express = require("express");
const Datastore = require("nedb");

const database = new Datastore('scoreboard.db');
database.loadDatabase();




const app = express();

app.use(express.static("./static"));
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;

app.listen(port, function () {
	console.log(`Example app listening on port ${port}!`);
});



  
