import React from 'react';
import axios from 'axios';

const url = 'https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet';

export function getTweets() {
  return axios.get(url);
}

export function createTweet(tweet) {
  return axios.post(url, tweet);
}
