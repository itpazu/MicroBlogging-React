import React from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';

class TweetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { keyItem, id, author, content } = this.props;
    return (
      <>
        <div className='col-8 mb-3 mx-auto container-tweets '>
          <div key={keyItem} className='wrapper-tweet card h-100'>
            <div className='header-tweet d-flex justify-content-between border-0 '>
              <div> {author} </div>
              <div>{id}</div>
            </div>
            <div className='card-body card-tweet h-100 '>{content}</div>{' '}
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(TweetList);
