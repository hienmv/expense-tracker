import React from "react";

export const TransactionHistory = ({ updatedFlag }) => {
  let [latestTransactions, setLatestTransactions] = React.useState([]);

  React.useEffect(() => {
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    if (transactions.length > 0) {
      setLatestTransactions(
        transactions.slice(Math.max(transactions.length - 3, 0)).reverse()
      );
    }
  }, [updatedFlag]);

  return (
    <>
      <h3>Transaction history</h3>
      {latestTransactions.map((item, i) => {
        return (
          <div key={item.title}>
            {item.title} - {item.amount}
          </div>
        );
      })}
    </>
  );
};
