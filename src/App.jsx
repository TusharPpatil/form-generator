// App.js
import React from 'react';
import FormGenerator from './components/FormGenerator';

function App() {
  return (
    <div>
      <div style={{width: "100%", display:"flex", justifyContent:"center" , margin:"10px"}}>
      <h1 style={{color: "#0f5753"}} >Dynamic Form Generator</h1>
      </div>
      <FormGenerator />
    </div>
  );
}

export default App;
