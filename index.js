const {request} = require('express');
const express = require('express');
const app = express();
const port = 1000;
app.use(express.urlencoded({ extended: true}))
app.use(express.static('static'));
app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});
