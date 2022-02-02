const express = require('express');

const app = express();


// serve static contents
app.use(express.static('static'));

app.get('/', (req, res) => {
    var arr = [];
    arr = req.body.random;
    while(arr.length < 10){
        var r = Math.floor(Math.random() * 20) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
});










app.listen(2000);