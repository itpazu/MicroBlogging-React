import React from 'react';
// import axios from 'axios';
import fireBaseDB from '../firesbase';

export function getTweets() {
  let collection = fireBaseDB
    .collection('tweets')
    .orderBy('date', 'desc')
    .limit(10);
  return collection.get();
}

export function createTweet(tweet) {
  // return fireBaseDB.collection('tweets').add(tweet);
  return fireBaseDB.collection('tweets').doc(tweet.date).set(tweet);
}
