import React from 'react';
import './Account.css';

import Profileimage from '../Components/assets/profileimg.png';
import { useAuth } from './Auth';
import { useNavigate } from 'react-router-dom';

export default function Account() {
  const auth = useAuth();
  const navigate = useNavigate();

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const user = users.length > 0 ? users[users.length - 1] : {};

  function logout() {
    auth.logout();
    alert('Logged out successfully...');
    navigate('/login');
    localStorage.removeItem(users)
  }

  return (
    <div className='account'>
      <div className='account-main'>
        <div className='accountuser-info'>
          <h1 className='my-word'>My</h1>
          <div className='userimage-container'>
            <img src={Profileimage} className='usersImage' alt="User Profile" />
          </div>
        </div>
        <h1 className='profile-word'>Profile</h1>
        <fieldset>
          <legend>Info</legend>
          <h4 className='account-username'>Username</h4>
          <h3 className='account-name'>{user.username || 'N/A'}</h3>
          <h4 className='account-emailid'>Email</h4>
          <h3 className='account-email'>{user.email || 'N/A'}</h3>
          <h4 className='account-mobile'>Mobile Number</h4>
          <h3 className='account-number'>{user.mobilenumber || 'N/A'}</h3>
          <button className='account-logoutbtn' onClick={logout}>Logout</button>
        </fieldset>
      </div>
      <label className='quotes'>Enjoy Shopping On EcoMart!</label>
    </div>
  );
}