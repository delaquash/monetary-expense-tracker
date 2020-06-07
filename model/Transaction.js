const mongoose=require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    amount: {
        type: Number,
        required: [true, 'Please add either a positive amount or negative number']
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction',TransactionSchema);