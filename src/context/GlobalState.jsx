import { createContext, useContext, useEffect, useReducer } from "react";
import { AppReducer } from "./AppReducer";


export const Context = createContext()

const initialState = {
    transactions: []
}

 export const useGlobalState = () => {
   const context = useContext(Context)
   return context
 }

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState,
         () => {
            const localData = localStorage.getItem('transactions')
            return localData ? JSON.parse(localData) : initialState
    }) 

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state))
    }, [state])

    const addTransaction = (objDescription) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: objDescription
        })
        console.log("Se añadio la transaccion")
    }

    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
        console.log("Se elimino la transaccion")
    }

    return (<Context.Provider
         value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction
        }}
        >
            {children}
        </Context.Provider>
    )
}