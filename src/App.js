import React from 'react';
import logo from './logo.svg';
import './App.css';
import FullName from './Profile/FullName'
import Adress from './Profile/Adress'
import ProfilePhoto from './Profile/ProfilePhoto'


function App() {
  return (
    <div className="App">
     <FullName/>
     <br/>
     <Adress/>
     <ProfilePhoto/>
    </div>
  );
}

export default App;
