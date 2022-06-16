import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloFromHere from './components/HelloFromHere';
import HelloFromTheOtherSide from './components/HelloFromTheOtherSide';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloFromHere />
          .. 
        <HelloFromTheOtherSide />
      </header>
    </div>
  );
}

export default App;
