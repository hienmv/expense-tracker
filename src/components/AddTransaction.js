import React, { useState } from "react";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleAmount = (event) => {
    let amount = event.target.value;
    amount = amount.replace("e", "");
    setAmount(amount);
  };

  const onAddBtnClick = (event) => {
    event.preventDefault();
    localStorage.setItem("current_text", text);
    localStorage.setItem("current_amount", amount);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            className="input-layout"
            type="text"
            value={text}
            onChange={(e) => handleText(e)}
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
            onChange={(e) => handleAmount(e)}
            placeholder="Enter amount..."
            maxLength="10"
            required
          />
        </div>
        <button className="btn" onClick={(e) => onAddBtnClick(e)}>
          Add transaction
        </button>
      </form>
    </>
  );
};
