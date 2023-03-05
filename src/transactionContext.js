import cuid from "cuid";
import { createContext, useReducer } from "react";
import TransactionReducer from "./transactionReducer";

const initialTransaction = [];

export const TransactionContext = createContext(initialTransaction);

export const TransactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransactionReducer, initialTransaction);
  function addTransaction(transObj) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        id: cuid(),
        amount: transObj.amount,
        desc: transObj.desc,
      },
    });
  }
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions: state,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
