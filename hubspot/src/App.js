import React from 'react';
import './App.css';
import Header from './Components/Header';
import HeaderTwo from './Components/HeaderTwo';
import CardOne from './Components/CardOne';
import CardTwo from './Components/CardTwo';
import CardThree from './Components/CardThree';
import CardFour from './Components/CardFour';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="app">
      <Header />
      <HeaderTwo />
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
      <Footer />
    </div>
  );
}

export default App;
