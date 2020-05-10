import React from 'react';
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

  componentDidMount() {
    const newName = localStorage.getItem('userName');
    this.setState({ userName: newName }, () =>
      this.props.setCurrentName(this.state.userName)
    );
    this.fetchTweet();
  }

  async fetchTweet() {
    const data = await getTweets();
    this.setState({ tweets: data.data.tweets, spinner: false });
  }

  storeNewTweet(value) {
    this.setState({ spinner: true, error: false, errorType: '' });
    let date = new Date().toISOString();
    let tweet = {
      tweet: { userName: this.state.userName, content: value, date: date },
    };
    createTweet(tweet)
      .then((response) => {
        this.fetchTweet();
      })
      .catch((error) => {
        console.log(error.response.data);
        this.setState({
          error: true,
          errorType: error.response.data,
          spinner: false,
        });
      });
  }

  render() {
    const { tweets, spinner, error, errorType } = this.state;

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

          <CreateTweet
            createTweet={this.storeNewTweet.bind(this)}
            tweetObject={tweets}
            butnDisableDoubleRequest={true}
          ></CreateTweet>
          {
            <div>
              {tweets.map((tweet, index) => (
                <TweetList
                  keyItem={index}
                  author={tweet.userName}
                  id={tweet.date}
                  content={tweet.content}
                >
                  {error && (
                    <div>{`post will not be added - ${errorType}`}</div>
                  )}
                </TweetList>
              ))}
            </div>
          }
        </div>
      </>
    );
  }
}

export default withRouter(GetPostTweets);
