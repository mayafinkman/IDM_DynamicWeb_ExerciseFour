const express = require("express");
const router = express.Router();

//require firebase
const firebase = require("firebase");
//initialize firestore database
const db = firebase.firestore();

//create empty array
const blogpostsArray = [];
//create reference to collection
const blogposts = db.collection("blogposts");

router.get("/", (req, res) => {
    blogposts
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //push document into array every time the query loops over existing articles 
                blogpostsArray.push(doc.data());
            });
            return res.send(blogpostsArray);
        })
        .catch(function (error) {
            console.log("Error:", error);
            return res.send(error);
        
        });

});


module.exports = router;