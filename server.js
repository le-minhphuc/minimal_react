const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static("build"));

app.post('/', (req, res) => {
    console.log("Serving POST /");
    console.log(req.body);
    res.send('Hello my CORS!');
});

const serverPort = process.env.PORT || 3000;
app.listen(serverPort, () => { 
    console.log(`Listening on port ${serverPort}`);
});
