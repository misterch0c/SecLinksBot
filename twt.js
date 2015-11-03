console.log("-- Twitter Bot --");
var Twitter = require('twitter');
var cursor = -1;
var api_path = "followers/list"
var client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});
var params = {
    screen_name: 'misterch0c'
};
client.get('followers/list', params, function getData(error, tweets, response) {
    console.log("hey");
    if (tweets['next_cursor'] > 0) client.get('followers/list', {
        screen_name: 'misterch0c',
        cursor: tweets['next_cursor']
    }, getData);
    if (!error) {

        tweets.users.forEach(function(data) {
            console.log(data.url);
        });
        console.log(tweets.next_cursor_str);

    }
});