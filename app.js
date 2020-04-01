//Import express
const express = require('express');
//initiate express to app
const app = express();
// set the port - if env.PORT use that, otherwise use 4000
const port = process.env.PORT || 4000;

app.get('/', (req, res) => res.send('Exercise Four'));

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`));