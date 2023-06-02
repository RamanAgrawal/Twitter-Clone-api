const URL = "https://api.twitter.com/1.1/search/tweets.json";
const axios = require('axios');

class Twitter {
    get(query,count,maxId){
        return axios.get(URL, {
            params:{
                q:query,
                count:count,
                tweet_mode: "extended",
                max_id: maxId
            },
            headers: {
                "Authorization": `Bearer ${process.env.TWITTER_APL_TOKEN}`
            }   
        })
    }
}
module.exports = Twitter;