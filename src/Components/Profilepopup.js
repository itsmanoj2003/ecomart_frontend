import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';
import './Profilepopup.css';

import Profileimage from '../Components/assets/profileimg.png';
import Shield from '../Components/assets/shield.png';

export default function Profilepopup({ setPopup }) {
    const auth = useAuth();
    const navigate = useNavigate();

    function closepopup() {
        setPopup(false);
    }

    function viewProfile() {
        navigate('/account');
        setPopup(false);
    }

    function navigateLogin() {
        navigate('/login');
        setPopup(false);
    }

    function logout() {
        auth.logout();
        alert('Logged out successfully...');
        navigate('/login');
        setPopup(false);
    }

    // Get user data array from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Get the last signed-up user (assuming they are the logged-in user)
    const user = users.length > 0 ? users[users.length - 1] : {};

    return (
        <div className='profilepopup'>
            {auth.user ? (
                // Executes if user Exists
                <div className='profilepopup-main'>
                    <div className='profilepopup-circle'>
                        <button className='profilepopupclose-btn' onClick={closepopup}>
                            <h1 className='profilepopupclose-txt'>❌</h1>
                        </button>
                    </div>

                    <div className='profilepopup-box'>
                        <h2 className='profilepopup-title'>EcoMart Profile</h2>

                        <div className='profilepopup-image'>
                            <img src={Profileimage} className='popup-image' alt="Profile" />
                        </div>

                        <h4 className='profilepopup-username'>Username:</h4>
                        <h3 className='profilepopup-name'>{user.username || 'N/A'}</h3> {/* Updated Username */}
                        <div className='profilepopup-btns'>
                            <button className='profile-btn' onClick={logout}>Logout</button>
                            <button className='profile-btn' onClick={viewProfile}>View Profile</button>
                        </div>
                    </div>
                </div>
            ) : (
                // Executes if user does not exist
                <div className='profilepopupmain-no-user'>
                    <div className='profilepopup-circle'>
                        <button className='profilepopupclose-btn' onClick={closepopup}>
                            <h1 className='profilepopupclose-txt'>❌</h1>
                        </button>
                    </div>

                    <img src={Shield} className='nouser-shield' alt="No User" />

                    <h2 className='nouser-title'>Login To Continue...</h2>
                    <button className='profilepopup-loginbtn' onClick={navigateLogin}>Login</button>
                </div>
            )}
        </div>
    );
}