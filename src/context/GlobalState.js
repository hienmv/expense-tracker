import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer.js';
const initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

function addTransaction(transaction){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}


    return(<GlobalContext.Provider value={{
        transactions: state.transactions, 
        addTransaction 
    }}>
        {children}
    </GlobalContext.Provider>);
}