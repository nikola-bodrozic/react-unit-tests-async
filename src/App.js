import React from 'react';
import './App.css';
import Header from './comp/Header';
import Clickers from './comp/Clickers';
import Fetch from './comp/Fetch'

function App() {
  return (
    <div className="App">
      <Header />
      <Clickers />
      <Fetch />
    </div>
  );
}

export default App;
