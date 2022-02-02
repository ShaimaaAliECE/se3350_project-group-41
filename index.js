const express = require('express');

const app = express();


// serve static contents
app.use(express.static('static'));

app.get('/', (req, res) => {
    
    }
});










app.listen(2000);

