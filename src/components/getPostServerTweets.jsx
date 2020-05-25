import React, { useState, useEffect } from 'react';
import '../App.css';
import CreateTweet from './CreateTweet';
import TweetList from './TweetList';
import { getTweets, createTweet } from '../lib/api';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
import { ContextTweetList, contextUserName } from '../lib/AppContext';
import fireBaseDB from '../firesbase';

class GetPostTweets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      spinner: false,
      error: false,
      errorType: '',
      userName: '',
    };
  }
  static contextType = contextUserName;

  componentDidMount() {
    let { currentName } = this.context.currentName;
    this.setState({ userName: currentName });
    this.interval = setInterval(() => {
      this.fetchTweet();
    }, 2000);
    this.fetchTweet();
  }

  fetchTweet() {
    let fetchedTweets = [];
    const data = getTweets()
      .then((data) => {
        data.forEach((doc) => {
          fetchedTweets = [...fetchedTweets, doc.data()];
        });
        this.setState({ tweets: fetchedTweets });
      })
      .catch((err) => {
        console.log('Error getting document', err);
      });
  }

  storeNewTweet(value) {
    this.setState({ spinner: true, error: false, errorType: '' });
    let date = new Date().toISOString();
    let tweet = {
      userName: this.context.currentName,
      content: value,
      date: date,
    };
    createTweet(tweet)
      .then(() => {
        this.storeTweetLocally(tweet);
        this.setState({ spinner: false });
      })
      .catch((error) => {
        console.log(error.response);
        this.setState({
          error: true,
          errorType: error,
          spinner: false,
        });
      });
  }

  storeTweetLocally(tweetToStore) {
    let currentTweets = this.state.tweets;
    let modifiedTweets = [tweetToStore, ...currentTweets];
    this.setState({ tweets: modifiedTweets, spinner: false });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { tweets, spinner, error, errorType, userName } = this.state;

    return (
      <>
        {spinner && (
          <div className='text-center'>
            <div className='spinner-border' role='status'>
              <span className='sr-only'>Loading...</span>
            </div>
          </div>
        )}
        <div className=' container text-center'>
          {error && (
            <div className='error-post'>{`post will not be added - ${errorType}`}</div>
          )}
          <ContextTweetList.Provider
            value={{
              tweets: tweets,
              spinner: spinner,
              error: error,
              errorType: errorType,
              userName: userName,
              createTweet: (value) => this.storeNewTweet(value),
              butnDisableDoubleRequest: true,
            }}
          >
            <CreateTweet></CreateTweet>
            <TweetList></TweetList>
          </ContextTweetList.Provider>
        </div>
      </>
    );
  }
}

export default withRouter(GetPostTweets);
