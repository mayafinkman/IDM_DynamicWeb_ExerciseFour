//Import express
const express = require('express');

//initiate express to app
const app = express();
// set the port - if env.PORT use that, otherwise use 4000
const port = process.env.PORT || 4000;

//require firebase
var firebase = require("firebase");
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
//initialize firestore database
const db = firebase.firestore();
//create empty array
const blogpostsArray = [];
//create reference to collection
const blogposts = db.collection("blogposts");
//get blog posts
const allBlogposts = blogposts
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      blogpostsArray.push(doc.data());
    });
  })
  .catch(function (error) {
    console.log("Error:", error);
  });
//get single blog post
const documentToGet = "sample-post"; //should be the name of your id in cloud firestore
const singleBlogPost = blogposts
  .doc(documentToGet)
  .get()
  .then(function (doc) {
    if (doc.exists) {
      console.log("Document data:", doc.data());
    }
    else {
      // doc.data is undefined
      console.log("no such document!");
    }
  })
  .catch(function (error) {
    console.log("Error:", error);
  });

//import routes
const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/posts.js");
const createRoute = require("./routes/createArticle");

//create base route
// send json array as response
app.get('/', (req, res) => res.send('Exercise Four'));

//set up app so that it runs when this file is run
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`));