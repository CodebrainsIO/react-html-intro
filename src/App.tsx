import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import { Header } from './Header';
import UserList from './components/UserList';

function App() {
  
  
  return (
    <div>
      <Header />
      <UserList />
    </div>
  );
}

export default App;
