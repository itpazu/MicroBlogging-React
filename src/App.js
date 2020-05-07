import React from 'react';
import './App.css';
import CreateTweet from './components/CreateTweet';
import TweetList from './components/TweetList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
  }
  componentDidMount() {
    const LocallyStoredTweets = JSON.parse(localStorage.getItem('tweets'));
    if (LocallyStoredTweets) {
      this.setState({ tweets: LocallyStoredTweets });
      console.log(LocallyStoredTweets);
    }
  }
  storeNewTweet = (value) => {
    let { id, tweets } = this.state;
    // console.log(tweets);
    let date = new Date().toISOString();
    let tweet = { id: date, content: value, author: 'Itzik' };
    this.setState(
      {
        tweets: [tweet, ...this.state.tweets],
      },
      () => {
        localStorage.setItem('tweets', JSON.stringify(this.state.tweets));
      }
    );
  };

  render() {
    const { tweets } = this.state;
    // localStorage.clear();

    return (
      <div className=' container'>
        <CreateTweet
          createTweet={this.storeNewTweet.bind(this)}
          tweetObject={tweets}
        ></CreateTweet>
        <div>
          {tweets.map((tweet, index) => (
            <TweetList
              keyItem={index}
              author={tweet.author}
              id={tweet.id}
              content={tweet.content}
            ></TweetList>
          ))}
          )
        </div>
      </div>
    );
  }
}

export default App;

/*

this.state.tweets = [{id:someid, content:somecontent, date: ()=> Date.now(), author:Itzik}]
Create tweets and show them.


APP
________________________________________
_____________________________
|     CREATE TWWT            |
    state = teets, inputCreation
    deletesTweet()




______________________________

  _________________________
  | TweetList tweets={this.state.tweets}              |
    
    map!!!! and we list each one of them.
   tweetComponent
   [Happy Birthday, Delete Tweet.][][][][][][][][][][][]

   _________________________

________________________________________

*/
