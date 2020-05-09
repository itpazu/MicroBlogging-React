import React from 'react';

class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
    this.setState({ error: error, info: info, hasError: true });
  }
  render() {
    const { error, hasError } = this.state;
    if (hasError) {
      return (
        <>
          <div className='post-error d-flex justify-content-center'>
            <div> Post was not added - </div>
            <div>{error && error.toString()}</div>
          </div>
          {this.props.children}
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
