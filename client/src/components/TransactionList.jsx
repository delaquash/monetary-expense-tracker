import React, { useContext, useEffect } from 'react';
import MainTransaction from './MainTransaction.jsx';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = (props) => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  //   console.log(Transaction);
  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h3> History </h3>{' '}
      <ul id='list' className='list'>
        {' '}
        {transactions.map((transaction) => (
          <MainTransaction key={transaction.id} transaction={transaction} />
        ))}{' '}
      </ul>
    </>
  );
};

export default TransactionList;
