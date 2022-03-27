import React, { useState } from "react";

export const Balance = (updatedFlag) => {
  const [balance, setBalance] = useState(0);
  const [cost, setCost] = useState(0);
  const [revenue, setRevenue] = useState(0);

  React.useEffect(() => {
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    if (transactions.length > 0) {
      let _cost = 0;
      let _revenue = 0;
      transactions.forEach((transaction) => {
        const amount = parseFloat(transaction.amount);
        if (amount < 0.0) {
          _cost += amount;
        } else {
          _revenue += amount;
        }
      });
      setCost(_cost * -1);
      setRevenue(_revenue);
      setBalance(_cost + _revenue);
    }
  }, [updatedFlag]);

  return (
    <>
      <h3>Summary</h3>
      <h4>Balance: {balance}</h4>
      <h5>Cost: {cost}</h5>
      <h5>Revenue: {revenue}</h5>
    </>
  );
};
