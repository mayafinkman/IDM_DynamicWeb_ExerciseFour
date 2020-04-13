//Import express
const express = require('express');

//initiate express to app
const app = express();
// set the port - if env.PORT use that, otherwise use 4000
const port = process.env.PORT || 4000;

//require firebase
const firebase = require("firebase");
//get configuration object so we can communicate with fire base
const firebaseConfig = {
    apiKey: "AIzaSyAsJ9qUESsP4QN0DyETQM806sPVUF0T9IE",
    authDomain: "exercise-four-93dff.firebaseapp.com",
    databaseURL: "https://exercise-four-93dff.firebaseio.com",
    projectId: "exercise-four-93dff",
    storageBucket: "exercise-four-93dff.appspot.com",
    messagingSenderId: "266249443407",
    appId: "1:266249443407:web:81137949229749e461723a"
  };

//Initialize firebase
firebase.initializeApp(firebaseConfig);

//import routes
const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/post.js");
const createRoute = require("./routes/createArticle");

//create routes
// send JSON array as response
app.use("/", indexRoute);
app.use("/post", postRoute);
app.use("/create", createRoute);

// send json array as response
//app.get('/', (req, res) => res.send('Exercise Four'));

//set up app so that it runs when this file is run
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`));