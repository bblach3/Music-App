const express = require('express')
const router = express.Router()


//bring in feedback.json file
const feedbackData = require('../data/feedback.json') //this is an object

//import fs modules - read and write to file n disk
const fs = require('fs');

//body parser req.body.name
router.use(express.json());
router.use(express.urlencoded({extended: true}))

//import data.json
let dataFile = require('../data/data.json') //converted over to js object (not json)


router.get('/feedback', (req, res) =>{



    res.render('feedb', {
        pageTitle: "Drake - Feedback Form",
        pageID: "feedback"
    })
    
    })
    
    router.get('/api', (req, res) => {
        //display all of the messages in feedback.json
    
        res.json(feedbackData)
    });
    
    
    
    router.post('/api', (req, res) =>{
        //grab data that was sent to from  form
        //body-parser
        let name = req.body.name;
        let title = req.body.title;
        let message = req.body.message;
            console.log("form data", req.body);
    
        feedbackData.unshift(req.body);
        //[{},{},{},{}]
    
        //save to file (write to json file)
        fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err)=>{
            if(err){
                console.log(err);
            }
        })
        //send back all of messages with new message attached
        res.json(feedbackData)
    
        
    })
    
    
    module.exports = router;