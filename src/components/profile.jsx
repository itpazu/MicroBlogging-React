import React, { useState, useEffect } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';

const UserProfile = (props) => {
  let { currentname } = useParams(); /** update placeholder */
  const [currentUserName, setcurrentUserName] = useState('');
  const [newUserName, setnewUserName] = useState('');

  //set current user name and passes it to placeholder
  useEffect(() => {
    setcurrentUserName(currentname);
  }, []);
  // listens to input and saves what is typed in newUsername
  const storeNewName = (value) => {
    setnewUserName(value.target.value);
  };

  //on submit cleans the input field, stores the new user name in the local,
  // sets current user name to be new name so as to update place holde
  const handleOnNewNameSubmit = (e) => {
    e.preventDefault();
    setnewUserName('');
    localStorage.setItem('userName', newUserName);
    setcurrentUserName(newUserName);
  };

  return (
    <div className=' container mb-3 mt-2 d-flex justify-content-center'>
      <form onSubmit={handleOnNewNameSubmit} className='col-8'>
        <h1 className='text-decoration-none mt-5 mb-3 font-weight-normal'>
          Profile
        </h1>
        <div className='form-group'>
          <label for='formGroupExampleInput'>User Name</label>
          <input
            type='text'
            className='form-control bg-transparent p-4 '
            placeholder={currentUserName}
            aria-label="Recipient's username"
            aria-describedby='button-addon2'
            onChange={(value) => storeNewName(value)}
            value={newUserName}
          />
          <div class='input-group-append'></div>
          <button
            className='btn btn-primary mt-3 float-right'
            type='submit'
            id='button-addon2'
          >
            Button
          </button>
        </div>
      </form>
    </div>
  );
};
export default UserProfile;
