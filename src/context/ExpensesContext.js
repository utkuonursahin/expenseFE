import {createContext, useContext, useState} from "react";

const ExpensesContext = createContext()

const ExpensesProvider = ({children}) => {
  const [invoices, setInvoices] = useState()
  const [isClicked, setIsClicked] = useState(false)
  const values = {invoices, setInvoices,isClicked, setIsClicked}
  return <ExpensesContext.Provider value={values}>{children}</ExpensesContext.Provider>
}
const useExpenses = () => useContext(ExpensesContext)
export {ExpensesProvider, useExpenses}