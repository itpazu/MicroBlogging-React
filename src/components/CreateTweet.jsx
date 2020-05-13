import React, { useState, useEffect, useContext } from 'react';
import '../App.css';
import { ContextTweetList } from '../lib/AppContext';

const CreateTweet = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [btnDisable, setBtnDisable] = useState(true);
  const [alertTweetLength, setAlertTweetLength] = useState(false);
  const context = useContext(ContextTweetList);
  const { createTweet } = context;

  useEffect(() => {
    if (inputValue == 0 || inputValue.length > 140) {
      setBtnDisable(true);
    }
    inputValue.length > 140
      ? setAlertTweetLength(true)
      : setAlertTweetLength(false);
  }, [inputValue]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
    setBtnDisable(false);
  };

  const launchCreate = (e) => {
    e.preventDefault();
    setInputValue('');
    setBtnDisable(true);
    createTweet(inputValue);
  };

  return (
    <>
      <div className=' input-group container mb-3 mt-2 d-flex justify-content-center col-8'>
        <form onSubmit={launchCreate} className='w-100'>
          <textarea
            placeholder='type your tweet...'
            type='text'
            onChange={handleInput}
            value={inputValue}
            className='form-control text-area h-100 ;'
            aria-label='With textarea'
          ></textarea>
          <span className='input-group-append span-btn mr-3'>
            <button
              className='btn btn btn-primary'
              type='submit'
              disabled={btnDisable}
            >
              {' '}
              Create Tweet
            </button>
          </span>
          {alertTweetLength && (
            <span
              className='alert alert-danger div-alert w-50 h-25 ml-3 '
              role='alert'
            >
              140 charchters are exceeded!
            </span>
          )}
        </form>
      </div>
    </>
  );
};

export default CreateTweet;
