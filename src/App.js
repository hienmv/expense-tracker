import React from 'react';
import { Header } from './components/Header';

import { TransactionList } from './components/TransactionList';

import { AddTransaction } from './components/AddTransaction';



import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <TransactionList/>
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;