import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

 const Transaction = () => {
      const { addTransaction } = useContext(GlobalContext);
     const [text, setText] = useState("");
     const [amount, setAmount] = useState(0);
     const onSubmit = (e) => {
        e.preventDefault();
        // To generate random ID
        const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
     }
        addTransaction(newTransaction);
     }

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Test</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                     placeholder="Enter text here ..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount here ...." />
                </div>
                <button className="btn">Add Transaction in Naira</button>
            </form>
        </>
    );
};

export default Transaction;
