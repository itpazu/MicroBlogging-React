import React from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
import { ContextTweetList } from '../lib/AppContext';

class TweetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextType = ContextTweetList;

  render() {
    const { tweets } = this.context;
    return (
      <>
        {tweets.map((tweet, index) => {
          return (
            <div key={index} className='col-8 mb-3 mx-auto container-tweets '>
              <div className='wrapper-tweet card h-100'>
                <div className='header-tweet d-flex justify-content-between border-0 '>
                  <div> {tweet.userName} </div>
                  <div>{tweet.date}</div>
                </div>
                <div className='card-body card-tweet h-100 '>
                  {tweet.content}
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default withRouter(TweetList);
