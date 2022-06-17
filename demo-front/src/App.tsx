import React from 'react';
import './App.css';
import HelloFromHere from './components/HelloFromHere';
import HelloFromTheOtherSide from './components/HelloFromTheOtherSide';
import SomeCards from './components/SomeCards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloFromHere></HelloFromHere>
          .. 
        <HelloFromTheOtherSide></HelloFromTheOtherSide>
          ..
        <SomeCards></SomeCards>
      </header>
    </div>
  );
}

export default App;
