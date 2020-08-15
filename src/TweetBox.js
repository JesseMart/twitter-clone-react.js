import React, { useState } from 'react'
import "./TweetBox.css"
import db from './firebase'

import { Avatar, Button } from "@material-ui/core"

function TweetBox() {
    const[tweetMessage, setTweetMessage] = useState("");
    const[tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Bruce Wayne",
            username: "brucewayne",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar : "https://64.media.tumblr.com/ab77b5595fef4982db9c8e022456ec06/tumblr_p21yleGs2d1ucjqrdo1_250.png"
        });
        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar src="https://64.media.tumblr.com/ab77b5595fef4982db9c8e022456ec06/tumblr_p21yleGs2d1ucjqrdo1_250.png"/>
                <input 
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage} 
                    placeholder="What's happening?" 
                    type="text">
                    
                </input>
                </div>
                <input 
                onChange={(e)=> setTweetImage(e.target.value)}
                value={tweetImage}
                className="tweetBox__inputImage" 
                placeholder="Enter image URL" 
                type="text">
                </input>
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
