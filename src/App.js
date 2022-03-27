import React, { useState } from 'react';
import { Header } from './components/Header';
import { AddTransaction } from './components/AddTransaction';
import './App.css';
import { TransactionHistory } from './components/TransactionHistory';
import { Balance } from './components/Balance';

function App() {
  const [updatedFlag, setUpdatedFlag] = useState(false);
  return (
    <div>
      <Header />
      <div className="container">
        <Balance updatedFlag={updatedFlag} />
        <TransactionHistory updatedFlag={updatedFlag} />
        <AddTransaction setUpdatedFlag={setUpdatedFlag} />
      </div>
    </div>
  );
}

export default App;