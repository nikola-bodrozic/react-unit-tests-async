import React from 'react';
import './App.css';
import Header from './comp/Header';
import AxiosGet from './comp/AxiosGet'
import InputField from './comp/InputField'
import Form from './comp/Form'

function App() {
  return (
    <div className="App">
      <Header text='this is header'/>
      <InputField />
      <hr />
      <AxiosGet />
      <hr />
      <Form />
    </div>
  );
}

export default App;
