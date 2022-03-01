import React, {useState} from 'react'


export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);


  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input className="input-layout" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." maxLength="50" required/>
        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)</label>
          <input className="input-layout" type="number" value={amount} onChange={(e) => setAmount(e.target.value.match('[1-9]'))}
             placeholder="Enter amount..." maxLength="10" required/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}