import React, { useState } from "react";

export const AddTransaction = ({toggleUpdatedFlag}) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleAmount = (event) => {
    let amount = event.target.value;
    amount = amount.replace("e", "");
    setAmount(amount);
  };

  const onSubmitTransaction = (event) => {
    event.preventDefault();
    const currentTransaction = {
      title: text,
      amount: amount,
    };
    addingTransaction(currentTransaction);

    setText("");
    setAmount("");

    toggleUpdatedFlag();
  };

  const addingTransaction = (transaction) => {
    let currentTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (currentTransactions == null) {
      currentTransactions = [];
    }
    currentTransactions = [...currentTransactions, transaction];
    localStorage.setItem("transactions", JSON.stringify(currentTransactions));
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmitTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            className="input-layout"
            type="text"
            value={text}
            onChange={handleText}
            placeholder="Enter text..."
            maxLength="50"
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            className="input-layout"
            type="number"
            value={amount}
            onChange={handleAmount}
            placeholder="Enter amount..."
            required
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};