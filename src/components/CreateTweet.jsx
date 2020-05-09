import React from 'react';
import '../App.css';

//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class CreateTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      btnDisable: true,
      alert: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.launchCreate = this.launchCreate.bind(this);
  }

  handleInput = (e) => {
    this.setState({ inputValue: e.target.value, btnDisable: false });
    if (e.target.value.length == 0 || e.target.value.length > 140) {
      this.setState({ btnDisable: true });
    }
    e.target.value.length > 140
      ? this.setState({ alert: true })
      : this.setState({ alert: false });
  };

  launchCreate = (e) => {
    e.preventDefault();
    const { inputValue } = this.state;
    this.setState({ inputValue: '', btnDisable: true });
    this.props.createTweet(inputValue);
  };

  render() {
    const { inputValue, btnDisable, alert } = this.state;
    return (
      <>
        <div className=' input-group container mb-3 mt-2 d-flex justify-content-center'>
          <form onSubmit={this.launchCreate} className='w-50'>
            <textarea
              placeholder='type your tweet...'
              type='text'
              onChange={this.handleInput}
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
            {alert && (
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
  }
}

export default CreateTweet;
