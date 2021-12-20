const express = require("express");
const router = express.Router();
const {getMessaging} = require("firebase-admin/messaging")



router.get("/", async (req, res, next) => {
    res.send("Welcome to Home page");
    // next()
})

router.post("/notify", async (req, res, next) => {
    const topic = 'latest_news';
    if (req.body) {
        if (!req.body.title) {
            res.status(400).json({error:"please enter title"})
            return
        }
        if (!req.body.body) {
            res.status(400).json({error:"please enter body"})
            return
        }
        const message = {
            notification:{
                title:req.body.title,
                body:req.body.body
            },
            data:{
                "notification_foreground": "true"
            },
            topic: topic
        };
        await getMessaging().send(message)
            .then((response) => {
                // Response is a message ID string.
                console.log('Successfully sent message:', response);
                res.status(200).json({message:"Notification sent successfully"})
            })
            .catch((error) => {
                console.log('Error sending message:', error);
                res.status(4000).json({error:error})        
            });   
    }else{
        res.status(4000).json({error:"message is empty"})
        return
    }
})


module.exports = router;