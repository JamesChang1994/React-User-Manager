import React, { useState } from 'react';
import Header from './components/Header';
import LeftAside from './components/LeftAside';
import MainContent from './components/MainContent';
import './style/app.scss';

function App() {
  const profileImage = 'https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png';
  const sprites = ['male', 'female', 'human', 'identicon', 'initials', 'bottts', 'avataaars', 'jdenticon', 'gridy', 'micah']
  const [user, setUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);


  const setUserSeed = (userData: object) => {
    setUser(userData)
  }

  return (
    <div className="app">
      <Header />
      <div className='main-wrapper'>
        <LeftAside sprites={sprites} profileImage={profileImage} setAppSeed={setUserSeed} />
        <MainContent user={user} setAllUsers={setAllUsers} allUsers={allUsers} />
      </div>
    </div>
  );
}

export default App;
