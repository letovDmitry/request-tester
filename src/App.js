import React, { useState } from 'react';
import './App.css';
import ResponseField from './Components/ResponseField/ResponseField';
import UrlForm from './Components/UrlForm/UrlForm';

function App() {
  const [response, setResponse] = useState('sdf');
  return (
    <div className="App">
      <UrlForm setResponse={setResponse}/>
      <ResponseField response={response} />
    </div>
  );
}

export default App;
