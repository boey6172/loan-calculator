// import React from 'react';
import logo from './logo.png';
import './App.css';
import Calculator from './components/calculator'
import AppBar from './components/appbar'

function App() {
  return (

    <div className="App">
      <AppBar title= "Loan Calculator" logo = {logo}/>
      <header className="App-header">
        <div className='content'>
          <Calculator/>
        </div>
      </header>
    </div>
  );
}

export default App;
