import React from "react";

export const TransactionList = () =>{
    
    const transactions = (JSON.parse(localStorage.getItem("transactions"))).reverse();

 

    return(
        
            <>
                <h3>History</h3>
                <ul className="list">
            {transactions.map((transaction) => 
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.title}
            <span>{transaction.amount < 0 ? '-':'+'}${Math.abs(transaction.amount )}</span>
                <button className="delete-btn">x</button>
                    </li>)}
                    
                </ul>
            </>
    )

}

