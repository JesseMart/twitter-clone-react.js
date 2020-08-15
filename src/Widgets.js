import React from 'react'
import './Widgets.css'
import { TwitterShareButton , TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed"
import SearchIcon from '@material-ui/icons/Search'

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="type" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening?</h2>
                <TwitterTweetEmbed tweetId={"1294378264530747394"} />

                {/* Live Feed of a twitter profile */}
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="HyperScapeGame"
                    options={{ height: 400 }}
                />

                {/* On click of the tweet button, it takes you to twitter with the given text and url */}
                <TwitterShareButton url={"https://www.facebook.com/HyperScapeGame/"} options={{ text: "This game is amazing #EA", via:"@HyperScapeGame"}} />
            </div>
        </div>
    )
}

export default Widgets
