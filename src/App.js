import React from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import SideText from './components/SideText/SideText';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
     {/* <SideText /> */}
    </div>
  );
}

export default App;