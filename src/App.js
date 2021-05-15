import React from 'react';
import './App.scss';
import Nav from './components/Nav';

function App() {
  return (
  <div className="outerWrap">
    <div className="App">
      <Nav />
    </div>
    <div className="musicControls">
      Music Controls
    </div>
  </div>
  );
}

export default App;
