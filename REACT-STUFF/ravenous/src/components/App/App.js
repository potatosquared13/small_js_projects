import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <h2>open 24/7</h2>
      <SearchBar />
      <BusinessList />
  </div>
  );
}

export default App;
