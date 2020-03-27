import React, { useContext }from 'react';
import MainTransaction from './MainTransaction';
import  { GlobalContext } from '../context/GlobalState';

 const TransactionList = () => {
      const { transactions } = useContext(GlobalContext);
    //   console.log(Transaction);
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
            {transactions.map(transaction => (
                <MainTransaction key={transaction.id} transaction={transaction} />
            ))}

            </ul>

        </>
    )
}

export default TransactionList;
