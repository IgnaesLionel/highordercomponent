import React from 'react';
import './App.css';
import Vegeta from './Vegeta'
import Goku from './Goku'



function App() {
  return (
    <div className="container text-center">
      <h1> High Order Component </h1>
      <h2> Goku vs Vegeta</h2>
      <hr />
      <div className='row'>
        <Vegeta name="Vegeta"/>
        <Goku name="Goku"/>
      </div>
    </div>
  );
}

export default App;
