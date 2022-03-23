import React from 'react';
import { Header } from './components/Header';
import { AddTransaction } from './components/AddTransaction';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;