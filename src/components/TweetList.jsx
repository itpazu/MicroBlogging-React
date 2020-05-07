import React from 'react';
import '../App.css';

class TweetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { keyItem, id, author, content } = this.props;
    return (
      <>
        <div className='container mb-3'>
          <div
            key={keyItem}
            className='wrapper-tweet card w-50 h-100  d-flex justify-content-center text-center mx-auto '
          >
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

export default TweetList;
