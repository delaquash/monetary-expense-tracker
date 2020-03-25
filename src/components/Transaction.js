import React, { useState } from 'react';

 const Transaction = () => {
     const [text, setText] = useState("");
     const [amount, setAmount] = useState(0);
    return (
        <>
            <h3>Add New Transaction</h3>
            <form>
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
