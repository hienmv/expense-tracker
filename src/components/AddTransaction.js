import React, { useState } from "react";


export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);


  const handleText = (e) => {
    setText(e.key.value);
  };

  const handleAmount = (e) => {
    if (e.key === 'e') {
      setAmount(e.key.preventDefault);
    } else {
      setAmount(e.key.value);
    }
  };

  const onAddBtnClick = (e) => {
    e.preventDefault();
    console.log("result", text, amount);

    localStorage.setItem("current_text", text);
    setText(text);
    localStorage.setItem("current_amount", amount);
    setAmount(amount);
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
            onKeyPress={(e) => handleText(e)}
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
            onKeyPress={(e) => handleAmount(e)}
            placeholder="Enter amount..."
            maxLength="10"
            required
          />
        </div>
        <button className="btn" onClick={(e) => onAddBtnClick(e)}>Add transaction</button>
      </form>



    </>
  );
};
