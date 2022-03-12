import React from 'react';
import './App.css';
import Header from './comp/Header';
import Fetch from './comp/Fetch'
import InputField from './comp/InputField'

function App() {
  return (
    <div className="App">
      <Header text='this is header'/>
      <InputField />
      <hr />
      <Fetch />
    </div>
  );
}

export default App;
