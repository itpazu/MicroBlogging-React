import React from 'react';
import './App.css';
import GetPostTweets from './components/getPostServerTweets';
import UserProfile from './components/profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentName: '',
    };
  }

  setCurrentName = (name) => {
    this.setState({ currentName: name }, () =>
      console.log(this.state.currentName)
    );
  };
  render() {
    const { currentName } = this.state;
    return (
      <>
        <Router>
          <nav className='nav col-10 w-100 mx-auto nav-bar rounded '>
            <Link className='nav-link text-muted' to='/'>
              Home
            </Link>
            <Link
              className='nav-link text-muted'
              to={`/profile/${currentName}`}
            >
              Profile
            </Link>{' '}
          </nav>

          <Switch>
            <Route path='/profile/:currentname'>
              <UserProfile> </UserProfile>
            </Route>

            <Route path='/'>
              <GetPostTweets
                setCurrentName={(name) => this.setCurrentName(name)}
              ></GetPostTweets>
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;

/*

this.state.tweets = [{id:someid, content:somecontent, date: ()=> Date.now(), author:Itzik}]
Create tweets and show them.


APP
________________________________________
_____________________________
|     CREATE TWWT            |
    state = teets, inputCreation
    deletesTweet()




______________________________

  _________________________
  | TweetList tweets={this.state.tweets}              |
    
    map!!!! and we list each one of them.
   tweetComponent
   [Happy Birthday, Delete Tweet.][][][][][][][][][][][]

   _________________________

________________________________________

*/
