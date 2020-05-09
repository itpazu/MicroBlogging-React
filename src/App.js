import React from 'react';
import './App.css';
import GetPostTweets from './components/getPostServerTweets';
import ErrorBoundry from './components/errorBoundry';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {/* <ErrorBoundry> */}
        <GetPostTweets></GetPostTweets>
        {/* </ErrorBoundry> */}
      </>
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
