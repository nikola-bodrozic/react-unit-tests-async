import React from 'react';
import './App.css';
import Header from './comp/Header';
import Fetch from './comp/Fetch'

function App() {
  return (
    <div className="App">
      <h1 data-testid='bigtitle'>title</h1>
      <Header />
      <Fetch />
    </div>
  );
}

export default App;
