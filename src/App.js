import React, { useState, useEffect, useContext } from 'react';
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
import { contextUserName } from './lib/AppContext';

const App = (props) => {
  const [currentName, setCurrentName] = useState('');

  // const context = useContext(contextUserName);

  useEffect(() => {
    let newName = localStorage.getItem('userName');
    setCurrentName(newName);
  }, []);

  const updateUserName = (newName) => {
    setCurrentName(newName);
  };

  return (
    <>
      <Router>
        <contextUserName.Provider
          value={{
            currentName: currentName,
            updateUserName: (newName) => updateUserName(newName),
          }}
        >
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
              <GetPostTweets></GetPostTweets>
            </Route>
          </Switch>
        </contextUserName.Provider>
      </Router>
    </>
  );
};

export default App;
