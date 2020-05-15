import React from 'react';
// import axios from 'axios';
import fireBaseDB from '../firesbase';

export function getTweets() {
  return fireBaseDB.collection('tweets').get();
}

export function createTweet(tweet) {
  console.log(tweet);
  return fireBaseDB.collection('tweets').add(tweet);
}
