import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import MainTransaction from '../components/MainTransaction';

// Initial State
const InitialState = {
    transactions: [
        { id: 1, text: "Flower", amount: -200 },
        { id: 2, text: "Income", amount: 300 },
        { id: 3, text: "Book", amount: -10 },
        { id: 4, text: "Camera", amount: 150 }
    ]
}

// Create context

export const GlobalContext = createContext(InitialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(AppReducer, InitialState);

    // Action for deleting an expense
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    // Action for adding an expense

    function addTransaction (transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: MainTransaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}


