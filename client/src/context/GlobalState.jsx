import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
// import MainTransaction from '../components/MainTransaction';
import axios from 'axios';

// Initial State
const InitialState = {
  transactions: [],
  error: null,
  loading: true,
};

// Create context

export const GlobalContext = createContext(InitialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);

  // Async function for axios

  async function getTransactions() {
    try {
      const res = await axios.get('/api/v2/transactions');
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  // Action for deleting an expense
  async function deleteTransaction(id) {
    try {
         await axios.delete(`/api/v2/transactions/${id}`);
                dispatch({
                  type: 'DELETE_TRANSACTION',
                  payload: id
                });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }


  // Action for adding an expense
  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("/api/v2/transactions", transaction, config);
        dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data
      });
    } catch (err) {
        dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        error: state.error,
        getTransactions,
        loading: state.loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
