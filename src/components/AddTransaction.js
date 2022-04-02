import React, { useState } from "react";

export const AddTransaction = (toggleUpdatedFlag) => {
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

    // reset input value
    setText("");
    setAmount("");

    toggleUpdatedFlag();
  };

  const addingTransaction = (transaction) => {
    // lấy ra danh sách các transaction hiện tại
    let currentTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (currentTransactions == null) {
      currentTransactions = [];
    }
    // thêm transaction hiện tại vào danh sách các transaction
    currentTransactions = [...currentTransactions, transaction];
    // lưu lại danh sách transaction vào local storage
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
