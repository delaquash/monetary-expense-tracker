import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';



// Initial State
const InitialState = {
    transactions: [
        { id: 1, text: "Flower", amount: -200 },
        { id: 1, text: "Income", amount: 300 },
        { id: 3, text: "Book", amount: -10 },
        { id: 4, text: "Camera", amount: 150 }
    ]
}

// Create context

export const GlobalContext = createContext(InitialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(AppReducer, InitialState);

    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>);
}


