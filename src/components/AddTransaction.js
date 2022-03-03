import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSetTextChange = (e) => {
    setText(e.target.value);
  };
  const onSetAmountChange = (e) => {
    setAmount(
      e.target.value < 0
        ? (e.target.value = 0)
        : e.target.value
    );
    
    e.target.value = 'e'
        ? (e.target.value = 'error')
        : e.target.value
  };

  const onAddBtnClick = (e) => {
    setText([...text], {id: 'v4', name: text});
    setAmount([...amount], {id: 'v4', name: amount});
  }

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
            onChange={onSetTextChange}
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
            onChange={onSetAmountChange}
            placeholder="Enter amount..."
            maxLength="10"
            required
          />
        </div>
        <button className="btn" onClick={onAddBtnClick}>Add transaction</button>
      </form>
    </>
  );
};
