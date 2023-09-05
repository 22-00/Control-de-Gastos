import React from 'react'

export const AppReducer = (state, action) => {
    switch(action.type){
        case "ADD_TRANSACTION": 
            return {...state, transactions: [...state.transactions, action.payload] }
        case "DELETE_TRANSACTION":
            return {...state, transactions: state.transactions.filter((trans)=> trans.id != action.payload)}
        default: 
            return state
    }
}
