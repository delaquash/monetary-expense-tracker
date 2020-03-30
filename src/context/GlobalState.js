import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
// import MainTransaction from '../components/MainTransaction';

// Initial State
const InitialState = {
    transactions: []
};

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
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
};


