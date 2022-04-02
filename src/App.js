import React, { useState } from 'react';
import { Header } from './components/Header';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import './App.css';

function App() {
  const [updateFlag, setUpdatedFlag] = useState(false);

  const toggleUpdatedFlag = () => {
    setUpdatedFlag(updateFlag => !updateFlag);
  }
  return (
    <div>
      <Header />
      <div className="container">
        <TransactionList updateFlag={updateFlag} />
        <AddTransaction toggleUpdatedFlag={toggleUpdatedFlag} />
      </div>
    </div>
  );
}

export default App;