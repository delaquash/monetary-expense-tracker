// Description:- This is to get all transaction
// route Get /api/v1/transactions
// Access Public

exports.getTransactions = (req, res, next) => {
    res.send("GET Transaction");
};

// Description:- This is to add all transaction
// route Get /api/v1/transactions
// Access Public

exports.addTransaction = (req, res, next) => {
    res.send("POST Transaction");
};


// Description:- This is to delete all transaction
// route Get /api/v1/transactions
// Access Public

exports.deleteTransaction = (req, res, next) => {
    res.send("DELETE Transaction");
};

// module.exports= router;
