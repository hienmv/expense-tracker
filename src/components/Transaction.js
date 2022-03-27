import React from 'react'

export const Transaction = ({ Transaction }) => {
    const sign = Transaction.amount < 0 ? '-' : '+';

  return (
    <li className={Transaction.amount < 0 ? 'minus' : 'plus'}>
{Transaction.text}<span>{sign}${Math.abs(Transaction.amount)}</span><button className="delete-btn">x</button>
    </li>
  )
}
