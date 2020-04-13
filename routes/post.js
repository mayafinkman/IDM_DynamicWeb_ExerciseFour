//Import express
const express = require('express');
const router = express.Router();

//initiate express to app
const app = express();
//require firebase
const firebase = require("firebase");

//initialize firestore database
const db = firebase.firestore();


//create reference to collection
const blogposts = db.collection("blogposts");

router.get("/", (req, res) => res.send("Please include ID"));

//get single blog post
router.get("/:id", (req, res) => {
    const queryId = req.params.id;
    blogposts
        .doc(queryId)
        .get()
        .then(function (doc) {
            if (doc.exists) {
                return res.send(doc.data());
            }
            else {
                return res.send("no such document!");
            }
        })
        .catch(function (error) {
            console.log("Error:", error);
            return res.send(error);
        });
});
    
module.exports = router;