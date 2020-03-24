import React from 'react';

 const Transaction = () => {
    return (
        <>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Test</label>
                    <input type="text" placeholder="Enter text here ..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" placeholder="Enter amount here ...." />
                </div>
                <button className="btn">Add Transaction in Naira</button>
            </form>
        </>
    );
};

export default Transaction;
