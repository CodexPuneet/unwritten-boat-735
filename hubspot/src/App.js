import React from 'react';
import './App.css';
import Header from './Components/Header';
import HeaderTwo from './Components/HeaderTwo';
import CardOne from './Components/CardOne';
import CardTwo from './Components/CardTwo';
import CardThree from './Components/CardThree';
import CardFour from './Components/CardFour';


function App() {
  return (
    <div className="app">
      <Header />
      <HeaderTwo />
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
    </div>
  );
}

export default App;
