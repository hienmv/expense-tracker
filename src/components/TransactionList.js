import React from "react";

export const TransactionList = ({ updatedFlag }) =>{
  const [transactions, setTransactions] = React.useState([]);
  React.useEffect(() => {
    const transactions = JSON.parse(
      localStorage.getItem("transactions")
    ).reverse();
    setTransactions(transactions);
  }, [updatedFlag]);    
  return(
    <>
      <h3>History</h3>
        <ul className="list">
        {transactions.map((transaction) => 
        <li key = {'${transactions.title}${transactions.amount}'} 
        className={ transaction.amount < 0 ? 'minus' : 'plus'}>{transaction.title}
        <span>{ transaction.amount < 0 ? '-':'+' }${Math.abs( transaction.amount )}</span>
        <button className="delete-btn">x</button>
        </li>)}
        </ul>
    </>
)
};

