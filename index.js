const express = require('express');

const app = express();

app.use(express.urlencoded({extended:true}))
// serve static contents
app.use(express.static('static'));








app.listen(2000);